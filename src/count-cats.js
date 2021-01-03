const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.flat();
  let sum = 0;
  for (let i of matrix) if (i === "^^") sum = sum + 1;
  return sum;
}