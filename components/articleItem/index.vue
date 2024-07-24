<template>
	<view class="item_border flex-row flex-align-center" @click="goArticle">
    <view class="image_area">
      <image class="banner_image" mode="scaleToFill" :src="props.data.imageUrl"></image>
    </view>
    <view class="content_area flex-column">
      <text class="title">{{ props.data.title }}</text>
      <text class="intro">{{ props.data.intro }}</text>
      <image class="score" mode="scaleToFill" src="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/article/score.png"></image>
    </view>
  </view>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  const props = defineProps({  
    data: {  
      sub_title: '',
      title: '',
      score: 1,
      id: '',
      imageUrl: '',
      bannerUrl: '',
      groupId: '',
      intro: '',
    }  
  })
  const goArticle = () => {
    uni.navigateTo({
      url: `/pages/article/index?id=${props.data.id}`
    });
  }
</script>

<style lang='scss'>
  .item_border {
    box-sizing: border-box;
    margin-top: 20rpx;
    height: 288rpx;
    width: 638rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -6rpx 12rpx  rgba(173, 174, 179, 0.09), 0px 6rpx 12rpx  rgba(173, 174, 179, 0.09);
    border-radius: 28rpx;
    padding: 34rpx;
    column-gap: 34rpx;
    .image_area {
      image {
        height: 208rpx;
        width: 208rpx;
        border-radius: 24rpx;
      }
    }
    .content_area {
      row-gap: 4rpx;
      .title {
        font-size: 28rpx;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 42rpx;
        color: rgba(51, 51, 51, 1);
      }
      .intro{
        font-size: 24rpx;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 34rpx;
        color: rgba(51, 51, 51, 0.6);
        display: -webkit-box;
        /* 子元素的排列方式：垂直排列 */
        -webkit-box-orient: vertical;
        /* 设置3行文本之后打点显示 */
        -webkit-line-clamp: 3;
        /* 超出盒子部分隐藏显示 */
        overflow: hidden;

      }
      .score {
        width: 130rpx;
        height: 26rpx;
      }
    }
    
  }
</style>
