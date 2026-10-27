var isDate = function (input) {
  // 1. Date object: it can still be an Invalid Date, so check the time value
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // 2. String or number (timestamp): try to parse
  if (typeof input === "string" || typeof input === "number") {
    return !isNaN(new Date(input).getTime());
  }

  // 3. Everything else (null, undefined, object, array, boolean)
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));