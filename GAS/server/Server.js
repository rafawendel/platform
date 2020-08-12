/**
 * @OnlyCurrentDoc
 */
const SHEET_NAME = 'Database'
const SCRIPT_PROP = PropertiesService.getScriptProperties()
function doPost(e) {
  return handleResponse(e, (event, sheet) => {
    // const nextRow = sheet.getLastRow() + 1

    const { postData } = event
    if (!postData.type.includes('json')) throw new Error('Invalid data type')
    if (postData.length <= 0) throw new Error('Empty payload')
    const payload = JSON.parse(postData.contents)

    // const row = headers.map(header => {
    //   if (header === 'time_stamp') return new Date()
    //   return typeof payload[header] === 'object' ? JSON.stringify(payload[header]) : payload[header]
    // })

    // sheet.appendRow(row)

    const dataRange = sheet.getDataRange()
    const [headers, ...sheetData] = dataRange.getValues()
    const users = getUsers(headers, sheetData)
    const user = getUserByRegister(users, payload.register)
    const eventsRange = sheet.getRange(user.id + 1, headers.indexOf('events') + 1)
    const events = JSON.parse(eventsRange.getValues()[0][0])
    events.push(new Date())
    eventsRange.setValue(JSON.stringify(events))

    return { message: 'success', user }
  })
}

function getUserByRegister(users, register) {
  const user = users.find(user => user.register === register)
  if (!user) throw new Error('User not found')

  return user
}

function getUsers(headers, sheetData) {
  const users = sheetData.reduce((acc, row, j) => {
    if (!row[0]) return acc
    acc[j] = headers.reduce((user, header, i) => {
      user[header] = row[i]
      return user
    }, {})
    return acc
  }, [])

  return users
}

function doGet(e) {
  return handleResponse(e, (event, sheet) => {
    const dataRange = sheet.getDataRange().getValues()
    const [headers] = dataRange

    const { parameters } = event
    if (!Object.keys(parameters).includes('ip')) throw new Error('Invalid request')

    const ipCol = headers.indexOf('ip')
    const ips = dataRange.map(row => row[ipCol].toString())
    const isIpOnList = ips.includes(parameters.ip.toString())

    return { message: 'success', auth: !isIpOnList }
  })
}

function handleResponse(event, withSheetCb) {
  const lock = LockService.getScriptLock()

  try {
    lock.waitLock(20000)
    const doc = SpreadsheetApp.getActiveSpreadsheet() // openById(SCRIPT_PROP.getProperty('key'));
    const sheet = doc.getSheetByName(SHEET_NAME)

    const res = withSheetCb(event, sheet)

    return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(
      ContentService.MimeType.JSON
    )
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ message: 'error', error: err.message, auth: false })
    ).setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}
