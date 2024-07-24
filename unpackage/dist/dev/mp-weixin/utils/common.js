"use strict";
const getFloatStr = (num) => {
  num += "";
  num = num.replace(/[^0-9|\.]/g, "");
  if (/^0+/) {
    num = num.replace(/^0+/, "");
  }
  if (!/\./.test(num)) {
    num += ".00";
  }
  if (/^\./.test(num)) {
    num = "0" + num;
  }
  num += "00";
  num = num.match(/\d+\.\d{2}/)[0];
  return num;
};
exports.getFloatStr = getFloatStr;
