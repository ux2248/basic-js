const CustomError = require("../extensions/custom-error");
let arr = [];
const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    if (value === undefined) value = "( )";
    arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== "number") {arr.length = 0; throw new Error()}
    if (Number.isInteger(position) === false) {arr.length = 0; throw new Error()}
    if (position < 0 || position >= arr.length) {arr.length = 0; throw new Error()}
    arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    arr.reverse();
    return this;
  },
  finishChain() {
    let str = arr.join("~~");
    arr.length = 0;
    return str;
  }
};
module.exports = chainMaker;