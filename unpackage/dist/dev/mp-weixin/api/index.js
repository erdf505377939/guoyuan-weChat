"use strict";
const utils_request = require("../utils/request.js");
function getThematicList(data) {
  return utils_request.request({
    method: "get",
    // 请求方式
    url: "/api/thematicList",
    // 请求的url
    data
    // 参数
  });
}
function getActivityList(data) {
  return utils_request.request({
    method: "get",
    // 请求方式
    url: "/api/activityList",
    // 请求的url
    data
    // 参数
  });
}
function getArticleList(data) {
  return utils_request.request({
    method: "get",
    // 请求方式
    url: "/api/articleList",
    // 请求的url
    data
    // 参数
  });
}
function getArticle(data) {
  return utils_request.request({
    method: "get",
    // 请求方式
    url: "/api/article",
    // 请求的url
    data
    // 参数
  });
}
function userSignIn(data) {
  return utils_request.request({
    method: "post",
    // 请求方式
    url: "/api/login",
    // 请求的url
    data
    // 参数
  });
}
exports.getActivityList = getActivityList;
exports.getArticle = getArticle;
exports.getArticleList = getArticleList;
exports.getThematicList = getThematicList;
exports.userSignIn = userSignIn;
