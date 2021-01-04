const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let month = date.getMonth();
    if (month < 2 || month > 10) return "winter";
    else if(/[2-4]/.test(month)) return "spring";
    else if(/[5-7]/.test(month)) return "summer";
    else return "autumn";
  } throw new Error(`Error`);
}