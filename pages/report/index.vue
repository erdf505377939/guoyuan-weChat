<template>
	<view class="content">
    <view class="header flex-row flex-align-center">
      <view class="back">
        <NavBack />
      </view>
      <text>内容</text>
		</view>
    <scroll-view :style="{ height: `calc(100% - ${navBarHeight || 0}px - ${topHight || 0}px)` }"  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
      <view class="scroll-area">
        <Item v-for="cmp in listData" :key="cmp.id" :data="cmp" />
      </view>
    </scroll-view>
    
	</view>
</template>

<script setup>
	import {
    ref,
    onMounted
  } from 'vue';
  import NavBack from '@/components/NavBack/index.vue'
  import {
		getThematicList,
	} from '@/api/index.js'
  import Item from '@/components/Item/index.vue'

  const navBarHeight = ref(0)
  const topHight = ref(0)
  const scrollHeight = ref(100)
  const listData = ref([])
  onMounted(()=>{
    let app = uni.getSystemInfoSync()
    let topHightO = app.statusBarHeight
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    topHight.value = topHightO
    const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2
    navBarHeight.value = navBarHeightO
    getThematicList({}).then((res) => {
      // 请求数据成功，将将内容展示
      const {data} = res
      listData.value = data
    }).catch((error) => {
      uni.showToast({
        title: '请求列表数据失败！',
        icon: 'error',
        duration: 2000
      })
    })
  })
  const scrollTop = () => {

  }
  const upper = () => {

  }
  const lower = () => {

  }
  const scroll = () => {

  }
</script>

<style lang='scss'>
  .scroll-Y {
    .scroll-area {
      box-sizing: border-box;
      width: 100%;
      padding: 46rpx 48rpx 0rpx 48rpx;
      display: flex;
      justify-content: space-between;
      gap: 20rpx;
      flex-wrap: wrap;
    }
  }
	.content {
    .header {
      padding-top: 54px;
      height: 40px;
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
</style>
