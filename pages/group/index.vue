<template>
	<view class="group_content">
		<view class="header flex-row flex-align-center" :style="{ 'top': `${topHight}px`, height: `${navBarHeight}px` }">
		  <view class="back">
        <NavBack />
      </view>
      <text class="header_title"></text>
		</view>
		<view class="group_content_inner" :style="{ 'padding-top':  `${topHight + navBarHeight}px`}">
      <ArticleItem v-for="cmp in articleList" :key="cmp.id" :data="cmp"  />
    </view>
	</view>
</template>

<script setup>
	import {
    ref,
    onMounted
  } from 'vue'
  import NavBack from '@/components/NavBack/index.vue'
  import {onLoad} from '@dcloudio/uni-app'
  import ArticleItem from '@/components/articleItem/index.vue'
  import { getArticleList } from '@/api/index.js'

  const navBarHeight = ref(0)
  const topHight = ref(0)
  const queryParams = ref({})
  const articleList = ref([])
  onLoad((params) => {
    queryParams.value = params
  })
  onMounted(()=>{
    let app = uni.getSystemInfoSync()
    let topHightO = app.statusBarHeight
    topHight.value = topHightO
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2
    navBarHeight.value = navBarHeightO
    getArticleList({id: '1'}).then((e)=>{
      const { data } = e
      if(data.code === 0) {
        articleList.value = data.data || []
      } else {
        uni.showToast({
          title: data.message || '请求列表数据失败！',
          icon: 'error',
          duration: 2000
        })
      }
    }).catch(()=>{
      uni.showToast({
        title: '请求列表数据失败！',
        icon: 'error',
        duration: 2000
      })
    })
  })
</script>

<style lang='scss'>
	.group_content {
    height: 100%;
    position: relative;
    .header {
      z-index: 10;
      width: 100%;
      position: fixed;
      .back {
        height: 48rpx;
        width: 48rpx;
        margin-left: 56rpx;
      }
      .header_title {
        text-align: center;
        width: 100%;
      }
      text {
        width: 100%;
        text-align: left;
        text-indent: 56rpx;
      }
    }
    .group_content_inner {
      width: 100%;
      height: 100%;
      padding: 40rpx 56rpx 20rpx 56rpx;
      box-sizing: border-box;
      background-color: #fff;
      flex-wrap: wrap;
    }
	}
</style>
