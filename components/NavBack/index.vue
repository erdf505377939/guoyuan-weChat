<template>
	<view class="Nav_back" @click="naviBack">
		<image v-if="isHide" class="image" src="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/%E5%88%86%E7%BB%84%203.png" />
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const isHide = ref(false)
const naviBack = () => {
  uni.navigateBack()
}
onMounted(() => {
  let pageList = getCurrentPages()
  if(pageList.length >= 2) {
    isHide.value = true
  } else {
    isHide.value = false
  }
})
</script>

<style lang="scss">
.Nav_back {
  height: 48rpx;
  width: 48rpx;
	.image {
    height: 48rpx;
    width: 48rpx;
  }
}
</style>