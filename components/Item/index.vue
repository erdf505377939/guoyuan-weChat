<template>
	<view class="item_border" @click="goGroupPage">
    <image :src="props.data.bgImage" />
  </view>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  const props = defineProps({  
    data: {  
      bgImage: '',
      name: '',
      like: false,
      collect: false,
    }  
  })
  const emits = defineEmits({
    
  })
  const goGroupPage = () => {
    const { id } = props.data
    if(id === '1') {
      uni.navigateTo({
        url: `/pages/group/index?id=${id}`
      });
    } else {
      uni.showToast({
        title: '敬请期待！',
        duration: 1000
      })
    }
  }
</script>

<style lang='scss'>
  .item_border {
    height: 390rpx;
    width: 310rpx;
    border-radius: 18rpx;
    image {
      height: 390rpx;
      width: 310rpx;
      border-radius: 18rpx;
    }
  }
</style>
