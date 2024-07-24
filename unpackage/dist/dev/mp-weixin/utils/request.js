"use strict";
const common_vendor = require("../common/vendor.js");
const request = (config) => {
  config.url = "https://guoyuannihao.top" + config.url;
  if (!config.data) {
    config.data = {};
  }
  let promise = new Promise(function(resolve, reject) {
    common_vendor.index.request(config).then((responses) => {
      if (responses[0]) {
        reject({ message: "网络超时" });
      } else {
        let response = responses;
        resolve(response);
      }
    }).catch((error) => {
      reject(error);
    });
  });
  return promise;
};
exports.request = request;
