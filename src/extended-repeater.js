const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  let result;
  let changeLine = (text, time, separator) => {
    let arr = new Array(time).fill(text);
    for (let i = 0; i < arr.length-1; i += 1) arr[i] = arr[i] + separator;
    result = arr.join("");
  }
  changeLine(String(options.addition), options.additionRepeatTimes, options.additionSeparator);
  str = str + result;
  changeLine(String(str), options.repeatTimes, options.separator);
  return result;
}