<template>
	<view class="content">
    <view class="header flex-row flex-align-center">
      <view class="back">
        <NavBack />
      </view>
      <text>内容</text>
		</view>
		<image class="logo" src="/static/logo.png"></image>

	</view>
</template>

<script setup>
	import {
    ref,
    onMounted
  } from 'vue';
   import NavBack from '@/components/NavBack/index.vue'
  const navBarHeight = ref(0)
  const topHight = ref(0)
  onMounted(()=>{
    let app = uni.getSystemInfoSync()
    let topHightO = app.statusBarHeight
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHight) * 2
    navBarHeight.value = navBarHeightO
    topHight.value = topHightO
  })
</script>

<style lang='scss'>
	.content {
    .header {
      padding-top: 54px;
      height: 40px;
      background-color: aqua;
      z-index: 10;
      position: relative;
      .back {
        position: absolute;
        left: 56rpx;
        bottom: calc(22px - 24rpx);
        height: 48rpx;
        width: 48rpx;
      }
      text {
        width: 100%;
        text-align: center;
      }
    }
		height: 100%;
		display: flex;
		flex-direction: column;
    position: relative;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
