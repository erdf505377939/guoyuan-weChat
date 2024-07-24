<template>
  <uni-swiper-dot :info="info" :current="swipperInfo.current" field="content" :mode="swipperInfo.mode">
    <swiper circular autoplay class="swiper-box" @change="change">
      <swiper-item v-for="(item ,index) in info" :key="index">
        <view class="swiper-item">
          <image class="banner_image" style="width: 100%; height: 100%; background-color: #eeeeee;" mode="aspectFit" :src="item.bgImage"></image>
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>

<script setup>
	import {
    ref,
    onMounted
  } from 'vue';
  import {getActivityList} from '@/api/index.js'
  const info = ref([])
  onMounted(() => {
    // 获取banner数据
    getActivityList({}).then((e)=>{
      const { data } = e
      if(data.code === 0) {
        info.value = data.data || []
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
  const swipperInfo = ref({
    current: 0,
    mode: 'round',
  })
  const change = (e) => {
    const {target} = e
    swipperInfo.value.current = target.current || 0
  }
</script>

<style lang='scss'>
.swiper-box {
  height: 360rpx;
  border-radius: 30rpx;
  overflow: hidden;
}
.swiper-item {
  height: 100%;
  width: 100%;
  border-radius: 30rpx;
}
	
</style>
