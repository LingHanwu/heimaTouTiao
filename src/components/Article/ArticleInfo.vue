<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1" />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="cover.images[i]" alt="" class="thumb" v-for="(item, i) in cover.images" :key="i" />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{ author }} &nbsp;&nbsp; {{ cmtCount }}评论 &nbsp;&nbsp; {{ time }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  // 自定义属性
  props: {
    // 文章标题
    title: {
      type: String,
      default: ''
    },
    // 作者的名字
    author: {
      type: String,
      default: ''
    },
    // 评论数
    cmtCount: {
      type: [Number, String], // 既可以是数字也可以是字符串
      default: 0
    },
    // 发布日期
    time: {
      type: String,
      default: ''
    },
    // 封面的信息对象
    cover: {
      type: Object,
      // 传入一个对象时,需要用function传入一个默认值
      // eslint-disable-next-line space-before-function-paren
      default: function () {
        return {
          cover: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
