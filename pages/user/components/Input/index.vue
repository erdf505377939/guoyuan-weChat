<template>
	<view class="flex-row flex-align-center input_border" :class="{focus: focusState}">
    <image class="phone" :src="props.beforeImage" />
    <image v-if="props.password" class="password_icon" :src="textShow ? 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/eye_close_line.svg' : 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/eye_line.svg'" @click="()=>{textShow = !textShow}" />
    <input class="uni-input" :class="{isPassword: props.password}" :password="!textShow" v-model="inputText" :placeholder="props.placeholder" :maxlength="props.maxLength" placeholder-class="uni-input-placeholder" @focus="focus" @blur="blur" />
  </view>
</template>

<script setup>
  import {
    ref,
    watch
  } from 'vue';
  const props = defineProps({  
    value: '',
    beforeImage: '',
    maxLength: 20,
    placeholder: '',
    password: false,
  })
  const textShow = ref(props.password ? false : true)
  const focusState = ref(false)
  const emits = defineEmits({
    change: (val) => {},
  })
  const inputText = ref(props.value)
  watch(
    ()=>props.value,
    (val) => {
      inputText.value = val
    }
  )
  watch(
    ()=>inputText.value,
    (val) => {
      emits('change', val)
    }
  )
  const focus = () => {
    focusState.value = true
  }
  const blur = () => {
    focusState.value = false
  }
</script>

<style scoped lang='scss'>
::v-deep .uni-input-placeholder{
  font-size: 30rpx;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 42rpx;
  color: rgba(143, 149, 158, 1);
}
  .input_border {
    position: relative;
    width: 100%;
    border: 1rpx solid rgba(208, 211, 213, 1);
    border-radius: 15rpx;
    .phone {
      height: 48rpx;
      width: 48rpx;
      position: absolute;
      left: 30rpx;
      bottom: 30rpx;
    }
    .password_icon {
      height: 40rpx;
      width: 40rpx;
      position: absolute;
      right: 20rpx;
      bottom: 34rpx;
    }
    .password {
      height: 48rpx;
      width: 48rpx;
      position: absolute;
      left: 30rpx;
      bottom: 30rpx;
    }
    input {
      height: 100rpx;
      width: 100%;
      padding-left: 96rpx;
      font-size: 30rpx;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 42rpx;
      color: rgba(31, 35, 41, 1);
      &:focus {
        border: 1rpx solid #007AFF;
      }
    }
    .isPassword {
      padding-right: 60rpx;
    }
  }
  .focus {
    border: 1rpx solid #007AFF;
  }
</style>
