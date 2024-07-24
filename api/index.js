import request from '@/utils/request'

export function getThematicList(data) {
	return request({
		method: "get", // 请求方式
		url: '/api/thematicList', // 请求的url
		data // 参数
	})
}
export function regester(data) {
	return request({
		method: "post", // 请求方式
		url: '/api/setUser', // 请求的url
		data // 参数
	})
}
export function getActivityList(data) {
	return request({
		method: "get", // 请求方式
		url: '/api/activityList', // 请求的url
		data // 参数
	})
}
export function getArticleList(data) {
	return request({
		method: "get", // 请求方式
		url: '/api/articleList', // 请求的url
		data // 参数
	})
}
export function getArticle(data) {
	return request({
		method: "get", // 请求方式
		url: '/api/article', // 请求的url
		data // 参数
	})
}
export function userSignIn(data) {
	return request({
		method: "post", // 请求方式
		url: '/api/login', // 请求的url
		data // 参数
	})
}