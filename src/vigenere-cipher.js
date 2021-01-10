const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(condition = true) {
    this.condition = condition;
  }
  encrypt() {
    if (arguments[0] === undefined || arguments[1] === undefined) throw new Error();
    let message = String(arguments[0].toUpperCase());
    let key = arguments[1].toUpperCase();
    let reg = /[A-Z]/;
    let keyArr = [];
    let textArr = [];
    let textEncrypt = [];
    for (let i of message) {
      if (reg.test(i) === true) textArr.push(i.charCodeAt() - 65);
    }
    while(keyArr.length <= textArr.length) {
      for (let i of key) keyArr.push(i.charCodeAt() - 65);
    }
    if (keyArr.length > textArr.length) keyArr = keyArr.slice(0, textArr.length);
    for (let i = 0; i < textArr.length; i += 1) {
      textArr[i] = textArr[i] + keyArr[i];
      if (textArr[i] > 25) {
        while (textArr[i] > 25) textArr[i] = textArr[i] - 26;
      }
      textArr[i] = String.fromCharCode((textArr[i] + 65));
    }
    let a = 0;
    for (let i of message) {
      if (reg.test(i) === true) {
        i = textArr[a];
        a += 1;
      }
    textEncrypt.push(i);
    }
    if (this.condition === true) return textEncrypt.join("");
    return textEncrypt.reverse().join("");
  }    
  decrypt() {
    if (arguments[0] === undefined || arguments[1] === undefined) throw new Error();
    let message = String(arguments[0].toUpperCase());
    let key = arguments[1].toUpperCase();
    let reg = /[A-Z]/;
    let keyArr = [];
    let textArr = [];
    let textDecrypt = [];
    for (let i of message) {
      if (reg.test(i) === true) textArr.push(i.charCodeAt() - 65);
    }
    while(keyArr.length <= textArr.length) {
      for (let i of key) keyArr.push(i.charCodeAt() - 65);
    }
    if (keyArr.length > textArr.length) keyArr = keyArr.slice(0, textArr.length);
    for (let i = 0; i < textArr.length; i += 1) {
      textArr[i] = textArr[i] + 65 - keyArr[i];
      if (textArr[i] < 65) {
        while (textArr[i] < 65) textArr[i] = textArr[i] + 26;
     }
     textArr[i] = String.fromCharCode((textArr[i]));
    }
    let a = 0;
    for (let i of message) {
      if (reg.test(i) === true) {
        i = textArr[a];
        a += 1;
      }
    textDecrypt.push(i);
    }
    if (this.condition === true) return textDecrypt.join("");
    return textDecrypt.reverse().join("");
  }
}
module.exports = VigenereCipheringMachine;