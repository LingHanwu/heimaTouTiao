<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="黑马头条" fixed />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name" :cmt-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
    </van-list>
  </div>
</template>

<script>
// 按需导入API接口
import { getArticleListAPI } from '@/api/articleAPI.js'

import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'MyHome',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 存放文章的数组
      artlist: [],
      // 是否正在加载下一页数据 如果loding为true，则不会反复触发load事件
      // 每当下一页数据请求回来之后，需要把loding从true改为false
      // 由于页面初始化请求了一次数据。所以loading默认为true，即不会自动调用
      loading: true,
      // 所有数据是否加载完成了，如果没有更多数据，设置为true
      finished: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList() {
      // 发起get请求,获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      this.artlist = [...this.artlist, ...res]
      // 第一页数据请求完之后，开启下一页请求判断
      this.loading = false

      if (res.length === 0) {
        // 证明没有下一页的数据了，直接把finished改为true，表示数据加载完了
        this.finished = true
      }
    },
    // 只要onLoad被调用，就应该请求一次数据
    onLoad() {
      console.log('触发了load')
      // 1.当触发了load事件之后，让页码值+1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList()
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: #007bff;
    /deep/ .van-nav-bar__title {
      color: white;
    }
  }
}
</style>
