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
    width: 128rpx;
    height: 64rpx;
    border-radius: 55rpx;
    background: rgba(241, 243, 245, 1);
    text{
      font-size: 24rpx;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 34rpx;
      color: rgba(51, 51, 51, 1);
    }
  }
  .tab_border_focus {
    background: rgba(76, 110, 245, 1);
    box-shadow: 0px 4px 10px  rgba(76, 110, 245, 0.37);
    text {
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
</style>
