/**
 * @OnlyCurrentDoc
 */
const SHEET_NAME = 'Database'
const SCRIPT_PROP = PropertiesService.getScriptProperties()

function validateUser(user, validatorObj = {}) {
  Object.entries(validatorObj).forEach(([key, value]) => {
    if (!value) return
    if (!(key in user)) return
    if (user[key] != value) throw new Error('User is inconsistent')
  })
}

function getUserByRegister(users, register) {
  const user = users.find(user => user.register.toString() === register.toString())
  if (!user) throw new Error('User not found')

  return { user }
}

function getDataAsObj(headers, sheetData) {
  const dataObj = sheetData.reduce((objList, row, j) => {
    if (!row[0]) return acc // skips empty rows (first cell in row is reference)

    objList[j] = headers.reduce((datum, header, i) => {
      if (i === 0) datum.row = j + 2 // this adds a "row" property that points to the actual sheet row of origin
      datum[header] = row[i]
      return datum
    }, {})

    return objList
  }, [])

  return dataObj
}

function getRequestedUser(payload, sheetDataAsObj) {
  const user = getUserByRegister(users, payload.register)
  validateUser(user, { email: payload.email })

  return user
}

function registerEvent(row, col) {
  const eventsRange = sheet.getRange(row, col)
  const events = JSON.parse(range.getValues()[0][0])
  events.push(new Date())
  range.setValue(JSON.stringify(events))
}

function postWithSheet(event, sheet) {
  const { postData } = event
  if (!postData.type.includes('json')) throw new Error('Invalid data type')
  if (postData.length <= 0) throw new Error('Empty payload')
  const payload = JSON.parse(postData.contents)

  const dataRange = sheet.getDataRange()
  const [headers, ...sheetData] = dataRange.getValues()

  const users = getDataAsObj(headers, sheetData)
  const user = getRequestedUser(payload, users)
  registerEvent(user.row, headers.indexOf('events') + 1)

  return { user }
}

function handleResponse(event, withSheetCb) {
  const lock = LockService.getScriptLock()

  try {
    lock.waitLock(20000)
    const doc = SpreadsheetApp.getActiveSpreadsheet() // openById(SCRIPT_PROP.getProperty('key'));
    const sheet = doc.getSheetByName(SHEET_NAME)

    const res = withSheetCb(event, sheet)

    return ContentService.createTextOutput(
      JSON.stringify({ message: 'success', ...res })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ message: 'error', error: err.message, auth: false })
    ).setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}

function doPost(e) {
  return handleResponse(e, postWithSheet)
}

// function doGet(e) {
//  return handleResponse(e, (event, sheet) => {
//    const dataRange = sheet.getDataRange().getValues()
//    const [headers] = dataRange
//
//    const { parameters } = event
//    if (!Object.keys(parameters).includes('ip')) throw new Error('Invalid request')
//
//    const ipCol = headers.indexOf('ip')
//    const ips = dataRange.map(row => row[ipCol].toString())
//    const isIpOnList = ips.includes(parameters.ip.toString())
//
//    return { message: 'success', auth: !isIpOnList }
//  })
// }
