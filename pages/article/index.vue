<template>
	<view class="article_content">
    <image class="article_image" :src="articleInfo.bgImage" />
		<view class="header flex-row flex-align-center" :style="{ 'top': `${topHight}px`, height: `${navBarHeight}px` }">
		  <view class="back">
        <NavBack />
      </view>
      <text class="header_title"></text>
		</view>
		<view class="article_content_inner" :style="{ 'margin-top': `${topHight + 500 + navBarHeight}rpx` }">
      <view class="article_content_top flex-column">
        <view class="avatar_area">
          <image class="avatar" :src="articleInfo.imageUrl" />
        </view>
        <view class="name">{{ articleInfo.title }}</view>
        <view class="score_area flex-row flex-align-center">
          <image class="score" mode="scaleToFill" src="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/article/score.png" />
          <text>{{ `${getFloatStr(String(articleInfo.score))}分` }}</text>
        </view>
      </view>
      <view class="article_content_article">
        <zero-markdown-view :markdown="articleInfo.content || ''"></zero-markdown-view>
      </view>
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
  import { getArticle } from '@/api/index.js'
  import { getFloatStr } from '../../utils/common.js'

  const navBarHeight = ref(0)
  const topHight = ref(0)
  const queryParams = ref({})
  const articleInfo = ref({})
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
    const {id} = queryParams.value
    getArticle({id}).then((res)=>{
      const { data } = res
      if(data.code === 0) {
        articleInfo.value = data.data || {}
      } else {
        uni.showToast({
          title: data.message || '请求失败！',
          icon: 'error',
          duration: 2000
        })
      }
    }).catch(()=>{

    })
  })
</script>

<style lang='scss'>
	.article_content {
    height: 100%;
    position: relative;
    .article_image {
      width: 100%;
      height: 750rpx;
      z-index: -1;
      position: fixed;
      left: 0;
      top: 0;
    }
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
    .article_content_inner {
      margin-top: 500rpx;
      width: 100%;
      padding: 40rpx 56rpx 20rpx 56rpx;
      box-sizing: border-box;
      background-color: #fff;
      border-top-right-radius: 60rpx;
      border-top-left-radius: 60rpx;
      .article_content_top {
        position: relative;
        row-gap: 20rpx;
        .avatar_area {
          position: absolute;
          right: 0rpx;
          top: -110rpx;
          .avatar {
            height: 200rpx;
            width: 200rpx;
            border-radius: 50rpx;
          }
        }
        .name {
          font-size: 32rpx;
          font-weight: 500;
          letter-spacing: 0px;
          line-height: 46rpx;
          color: rgba(51, 51, 51, 1);
        }
        .score_area {
          column-gap: 12rpx;
          .score {
            width: 130rpx;
            height: 26rpx;
          }
          text {
            font-size: 24rpx;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 34rpx;
            color: rgba(51, 51, 51, 1);
          }
        }
        
      }
    }
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
