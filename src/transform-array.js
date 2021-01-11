const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error();
  if (arr.length === 0) return arr;
  let reg = new RegExp("--discard-next|--discard-prev|--double-next|--double-prev");
  if (reg.test(arr) === false) return arr;
  let testArr = [];
  for (let i of arr) testArr.push(i);
  do {
    if (testArr[0] === "--discard-prev" || testArr[0] === "--double-prev") {
      if (reg.test(testArr.slice(1)) === false) return testArr.slice(1);
      testArr = testArr.slice(1);
    }
    if (testArr[testArr.length-1] === "--discard-next" || testArr[testArr.length-1] === "--double-next") {
      if (reg.test(testArr.slice(0,-1)) === false) return testArr.slice(0,-1);
      testArr = testArr.slice(0,-1);
    }
    for (let i = 0; i < testArr.length; i += 1) {
      if (testArr[i] === "--discard-prev") {
        testArr[i] = 'delEl';
        testArr[i-1] = 'delEl';
      }
      if (testArr[i] === "--double-next") {
        testArr[i] = testArr[i+1];
      }
      if (testArr[i] === "--double-prev") {
        testArr[i] = testArr[i-1];
      }
      if (testArr[i] === "--discard-next") {
        testArr[i] = 'delEl';
        testArr[i+1] = 'delEl';
      }
    }
  } while (reg.test(testArr) === true);
  return testArr.filter(el => el !== 'delEl');
}
