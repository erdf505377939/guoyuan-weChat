<template>
	<view class="user_content">
    <view class="user_header flex-row flex-align-center">
      <view class="back">
        <NavBack />
      </view>
      <text></text>
    </view>
		<!-- <image class="user_bg" src="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/bg.png" /> -->
    <view class="user_avatar">
      <view class="avatar_border">
        <image src="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/tag.png" class="tag" />
        <button class="avatar_wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
          <image class="avatar" :src="userInfo.avatarUrl || 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/avatar.png'" />
        </button>
      </view>
    </view>
    <view class="user_info flex-column">
      <view class="user_name">游客</view>
      <view class="user_email">1978450878@qq.com</view>
    </view>
    <view class="user_trajectory flex-row flex-align-center flex-just-center">
      <view class="user_trajectory_contain flex-row flex-align-center">
        <view class="user_trajectory_item flex-column">
          <text class="user_trajectory_item_val">24</text>
          <text class="user_trajectory_item_label">我的收藏</text>
        </view>
        <view class="user_trajectory_item flex-column">
          <text class="user_trajectory_item_val">56</text>
          <text class="user_trajectory_item_label">历史记录</text>
        </view>
        <view class="user_trajectory_item flex-column">
          <text class="user_trajectory_item_val">10</text>
          <text class="user_trajectory_item_label">我的关注</text>
        </view>
      </view>
    </view>
    <view class="user_list">
      <div class="user_list_filter flex-row flex-align-center" >
        <TabItem v-for="cmp in filterList" :key="cmp.value" :data="cmp" :active="filterFocus === cmp.value" @tab-change="tabChange" />
      </div>
      <div class="user_list_item_border flex-row">
        <Item v-for="cmp in listData" :key="cmp.id" :data="cmp" />
      </div>
    </view>
	</view>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  
  import NavBack from '@/components/NavBack/index.vue'
  import Item from './components/Item/index.vue'
  import TabItem from './components/Tab/index.vue'

  const navBarHeight = ref(0)
  const topHight = ref(0)
  const userInfo = ref({})
  const filterFocus = ref('jsBasic')
  const listData = ref([
    {
      name: 'js基础汇总',
      id: '1',
      bgImage: 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian1.jpg',
      like: false,
      collect: false,
    },
    {
      name: 'css基础汇总',
      id: '2',
      bgImage: 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian2.jpg',
      like: false,
      collect: false,
    },
    {
      name: 'css小技巧',
      id: '3',
      bgImage: 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian3.jpg',
      like: false,
      collect: false,
    },
    {
      name: 'js小技巧',
      id: '4',
      bgImage: 'https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian4.jpg',
      like: false,
      collect: false,
    },
  ])
  const filterList = ref([
    {
      name: 'js基础',
      id: '1',
      value: 'jsBasic',
    },
    {
      name: 'css基础',
      id: '2',
      value: 'cssBasic',
    },
  ])
  onMounted(() => {
    let app = uni.getSystemInfoSync()
    let topHightO = app.statusBarHeight
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHight) * 2
    navBarHeight.value = navBarHeightO
    topHight.value = topHightO
  })
  const onChooseAvatar = (e) => {
    const { avatarUrl } = e.detail
    userInfo.value.avatarUrl = avatarUrl
  }
  const tabChange = (val) => {
    filterFocus.value = val
  }
</script>

<style lang='scss'>
	.user_content {
    background: rgba(245, 246, 247, 1);
    .user_header {
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
    .user_bg {
      height: 740rpx;
      width: 860rpx;
      position: absolute;
      left: -97rpx;
      top: -232rpx;
    }
    .user_avatar {
      z-index: 10;
      box-sizing: border-box;
      width: 100%;
      align-items: center;
      margin-top: 54rpx;
      .avatar_border {
        position: relative;
        .tag {
          position: absolute;
          right: 0px;
          top: 0px;
          height: 64rpx;
          width: 64rpx;
          left: calc(50% + 50rpx);
          z-index: 10;
        }
        .avatar_wrapper {
          height: 218rpx;
          width: 218rpx;
          padding: 0;
          border: 0;
          box-shadow: unset;
          background-color: unset;
          border-radius: 50%;
          .avatar {
            height: 218rpx;
            width: 218rpx;
            border-radius: 50%;
            box-shadow: 0px 12px 20px  rgba(28, 18, 75, 0.37);
          }
        }
      }
    }
    .user_info {
      margin-top: 50rpx;
      .user_name {
        text-align: center;
        font-size: 48rpx;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 72rpx;
        color: rgba(53, 64, 90, 1);
      }
      .user_email {
        font-size: 28rpx;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 42rpx;
        color: rgba(178, 182, 192, 1);
        text-align: center;
      }
    }
    .user_trajectory {
      width: 100%;
      margin-top: 38rpx;
      .user_trajectory_contain {
        height: 180rpx;
        width: 630rpx;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        .user_trajectory_item {
          justify-content: center;
          flex: 1;
          align-items: center;
          .user_trajectory_item_val {
            font-size: 44rpx;
            font-weight: 400;
            letter-spacing: 0rpx;
            line-height: 54rpx;
            color: rgba(53, 64, 90, 1);
          }
          .user_trajectory_item_label {
            font-size: 24rpx;
            font-weight: 400;
            letter-spacing: 0rpx;
            line-height: 36rpx;
            color: rgba(53, 64, 90, 0.38);
          }
        }
      }
    }
    .user_list {
      border-top-left-radius: 30rpx;
      border-top-right-radius: 30rpx;
      background-color: #fff;
      width: 100%;
      box-sizing: border-box;
      padding: 46rpx 48rpx 0rpx 48rpx;
      height: calc(100% - 890rpx);
      margin-top: 80rpx;
      .user_list_filter {
        width: 100%;
        height: 68rpx;
        width: 150rpx;
        padding-bottom: 52rpx;
        column-gap: 18rpx;
      }
      .user_list_item_border {
        overflow-y: scroll;
        height: calc(100% - 140rpx);
        row-gap: 38rpx;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }
    }
	}
</style>
