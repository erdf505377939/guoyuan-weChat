<template>
	<view class="login_content">
    <view class="login_image_border">
      <view class="login_text_area">{{`${loginPageState === 'signIn' ? '登录' : '注册'}`}}</view>
      <image class="login_image" src="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/banner/login_bg.png" />
    </view>
		<view class="header flex-row flex-align-center" :style="{ 'top': `${topHight}px`, height: `${navBarHeight}px` }">
		  <view class="back">
			  <NavBack />
			</view>
      <text class="header_title"></text>
		</view>
		<view class="login_content_inner" :style="{ 'margin-top': `calc(${topHight + navBarHeight}px + 400rpx)` }">
      <div v-if="loginPageState === 'signIn'" class="login_form_area flex-column">
        <Logininput @change="(val)=>{formData.userName = val}" :value="formData.userName" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg" :max-length="20" placeholder="请输入手机号" :password="false" />
        <Logininput @change="(val)=>{formData.password = val}" :value="formData.password" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg" :max-length="50" placeholder="请输入密码" :password="true" />
        <view class="login_more_info flex-row">
          <view class="refister"><text>还没有账号，点击</text><text class="btn" @click="goRegister">注册</text></view>
        </view>
        <view class="login_btn flex-row flex-center" @click="signIn">登录</view>
      </div>
      <div v-if="loginPageState === 'register'" class="login_form_area flex-column">
        <Logininput @change="(val)=>{formData.name = val}" :value="formData.name" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg" :max-length="10" placeholder="请输入姓名" :password="false" />
        <Logininput @change="(val)=>{formData.age = val}" :value="formData.age" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg" :max-length="10" placeholder="请输入年龄" :password="false" />
        <Logininput @change="(val)=>{formData.phone = val}" :value="formData.phone" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg" :max-length="10" placeholder="请输入手机号" :password="false" />
        <Logininput @change="(val)=>{formData.avatar = val}" :value="formData.avatar" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg" :max-length="10" placeholder="请输入头像" :password="false" />
        <Logininput @change="(val)=>{formData.nickName = val}" :value="formData.nickName" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg" :max-length="10" placeholder="请输入昵称" :password="false" />
        <Logininput @change="(val)=>{formData.email = val}" :value="formData.email" before-image="https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg" :max-length="10" placeholder="请输入邮箱" :password="false" />
        <!-- <view class="login_more_info flex-row">
          <view class="refister"><text>还没有账号，点击</text><text class="btn">注册</text></view>
        </view> -->
        <view class="login_btn flex-row flex-center" @click="signIn">登录</view>
      </div>
      <view class="heading" :class="{ heading_relative: loginPageState === 'register' }"><text>登录代表您已同意 </text><text class="link" @click="()=>{jumpPage('/pages/static_page/user_agreement/index')}">用户协议</text><text> 和 </text><text class="link" @click="()=>{jumpPage('/pages/static_page/privacy_agreement/index')}">隐私协议</text></view>
    </view>
	</view>
</template>

<script setup>
	import {
    ref,
    reactive,
    onMounted
  } from 'vue'
  import NavBack from '@/components/NavBack/index.vue'
  import { userSignIn } from '@/api/index.js'
  import Logininput from '../components/Input/index.vue'

  const navBarHeight = ref(0)
  const topHight = ref(0)
  const loginPageState = ref('signIn')
  const formData = reactive({
    userName: '',
    password: '',

    name: '',
    age: 0,
    phone: '',
    avatar: '',
    nickName: '',
    email: '',
  })
  onMounted(()=>{
    let app = uni.getSystemInfoSync()
    let topHightO = app.statusBarHeight
    topHight.value = topHightO
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2
    navBarHeight.value = navBarHeightO
  })
  const jumpPage = (path) => {
    uni.navigateTo({
      url: path
    });
  }
  const goRegister = () => {
    formData.userName = ''
    formData.password = ''
    formData.name = ''
    formData.age = 0
     formData.phone = ''
    formData.avatar = ''
    formData.nickName = ''
    formData.email = ''
    loginPageState.value = 'register'
  }
  const signIn = () => {
    const {userName, password} = formData
    if(!userName || !password) {
      uni.showToast({
        title: '账号或者密码不能为空，请完善！',
        icon: 'none',
        duration: 1000
      })
    } else {
      userSignIn({
        phone: userName,
        password,
      }).then((res) => {
        const { data } = res
        if(data.code === 0) {
          // 登录成功，将用户数据进行保存 然后返回之前的页面
        } else {
          uni.showToast({
            title: data.message || '登录失败，请重试！',
            icon: 'none',
            duration: 1000
          })
        }
      }).catch(() => {
        uni.showToast({
          title: '登录失败，请重试！',
          icon: 'none',
          duration: 1000
        })
      })
    }
  }
</script>

<style lang='scss'>
  page {
    height: auto !important;
  }
</style>
<style scoped lang='scss'>
	.login_content {
    position: relative;
    .login_image_border {
      width: 100%;
      height: 520rpx;
      z-index: -1;
      position: fixed;
      left: 0;
      top: 0;
      .login_image {
        height: 100%;
        width: 100%;
      }
      .login_text_area {
        position: absolute;
        left: 56rpx;
        bottom: 186rpx;
        font-size: 48rpx;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 67.2rpx;
        color: rgba(255, 255, 255, 1);
      }
    }
    
    .header {
      z-index: 10;
      width: 100%;
      position: fixed;
      .back {
        height: 48rpx;
        width: 48rpx;
        margin-left: 56rpx;
      }
      .header_title {
        text-align: center;
        width: 100%;
      }
      text {
        width: 100%;
        text-align: left;
      }
    }
    .login_content_inner {
      margin-top: 500rpx;
      width: 100%;
      padding: 40rpx 56rpx 20rpx 56rpx;
      box-sizing: border-box;
      background-color: #fff;
      border-top-right-radius: 60rpx;
      border-top-left-radius: 60rpx;
    }
    .login_form_area {
      row-gap: 51rpx;
      .login_more_info {
        align-items: center;
        justify-content: flex-end;
        .refister, .btn {
          font-size: 28rpx;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 39.2rpx;
          color: rgba(143, 149, 158, 1);
        }
        .btn {
          color: rgba(57, 119, 254, 1);
        }
      }
      .login_btn {
        width: 100%;
        height: 100rpx;
        margin-top: 49rpx;
        border-radius: 15rpx;
        background: linear-gradient(90deg, rgba(107, 151, 253, 1) 0%, rgba(59, 116, 249, 1) 100%);
        font-size: 30rpx;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 42rpx;
        color: rgba(255, 255, 255, 1);
      }
    }
	}
  .heading {
    width: 100%;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 100rpx;
    font-size: 28rpx;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 39.2rpx;
    color: rgba(143, 149, 158, 1);
    .link{
      color: rgba(59, 116, 249, 1);
    }
  }
  .heading_relative {
    position: relative;
  }
</style>
