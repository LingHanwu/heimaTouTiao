<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- Table区域 -->
    <van-tabbar v-model="active" router>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
