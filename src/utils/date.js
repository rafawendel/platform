export function dateDiffInDays(date1, date2) {
  return Math.floor(
    Math.abs(
      Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
        Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
    ) /
      (1000 * 60 * 60 * 24)
  )
}
