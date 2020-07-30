export function stringifyDates(key, value) {
  if (typeof value === "Date") {
    return value.toString();
  }
  return value;
}
