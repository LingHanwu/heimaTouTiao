/* eslint-disable space-before-function-paren */
// 文章相关的API接口,都封装到这个模块中

// 导入request.js
import request from '@/utils/request.js'

export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    // 请求参数
    params: {
      _page,
      _limit
    }
  })
}
