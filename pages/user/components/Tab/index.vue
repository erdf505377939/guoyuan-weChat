<template>
	<view class="tab_border flex-row flex-align-center flex-just-center" :class="{ tab_border_focus: props.active }" @click="changeTab">
    <text>{{ props.data.name }}</text>
  </view>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  const props = defineProps({  
    data: {  
      name: '',
      value: '',
      id: ''
    },
    active: false 
  })
  const emits = defineEmits({
    
  })
  const changeTab = () => {
    if (props.active === props.data.value) {
      return
    }
    emits('tabChange', props.data.value)
  }
</script>

<style lang='scss'>
  .tab_border {
    width: 150rpx;
    height: 68rpx;
    border-radius: 12rpx;
    background: rgba(245, 246, 247, 1);
    text{
      font-size: 24rpx;
      font-weight: 400;
      letter-spacing: 0rpx;
      line-height: 36rpx;
      color: rgba(97, 97, 97, 1);
    }
  }
  .tab_border_focus {
    background: rgba(241, 112, 21, 1);
    box-shadow: 3px 10px 34px  rgba(174, 72, 31, 0.3);
    text {
      color: rgba(255, 255, 255, 1);
    }
  }
</style>
