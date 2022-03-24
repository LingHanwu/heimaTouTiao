/* eslint-disable space-before-function-paren */
// 文章相关的API接口,都封装到这个模块中

// 导入request.js
import request from '@/utils/request.js'

// 演示使用,没有user接口
export const getUserInfoAPI = function () {
  return request.get('/user')
}
