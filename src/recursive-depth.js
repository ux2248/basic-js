const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let d = 1, t = 1;
    arr.map(e => {
      if (Array.isArray(e)) {
        t += this.calculateDepth(e);
        if (t > d) d = t;
        t = 1;
      }
    })
    return d;
  }
}