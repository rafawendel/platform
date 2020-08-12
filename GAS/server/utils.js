/**
 * @OnlyCurrentDoc
 */
function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet()
  SCRIPT_PROP.setProperty('key', doc.getId())
}
