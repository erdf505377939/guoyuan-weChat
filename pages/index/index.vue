<template>
	<view class="content">
		<view class="header flex-row flex-align-center" :style="{ 'padding-top': `${topHight}px`, height: `${navBarHeight}px` }">
		  <view class="back">
        <NavBack />
      </view>
      <text class="header_title">时光沙漏</text>
		</view>
		<view class="index_content" :style="{ height: `calc(100% - ${navBarHeight || 0}px - ${topHight || 0}px)` }">
      <uni-search-bar radius="30" @confirm="search" @input="input" ></uni-search-bar>
      <view class="swipper_border">
        <view class="swipper_area">
          <Swipper />
        </view>
      </view>
      <view class="tab_area">
        <TabItem v-for="cmp in filterList" :key="cmp.value" :data="cmp" :active="filterFocus === cmp.value" @tab-change="tabChange" />
      </view>
      <scroll-view :style="{ height: `calc(100% - ${navBarHeight || 0}px - ${topHight || 0}px - 480rpx)` }"  :scroll-top="scrollTop" scroll-y="true" class="article_scroll" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
        <view class="article_area flex-column">
          <ArticleItem v-for="cmp in articleList" :key="cmp.id" :data="cmp"  />
        </view>
      </scroll-view>
      
    </view>
	</view>
</template>

<script setup>
	import {
    ref,
    onMounted
  } from 'vue';
  import { getArticleList } from '@/api/index.js'
  import NavBack from '@/components/NavBack/index.vue'
  import Swipper from './components/Swipper/index.vue'
  import TabItem from './components/Tab/index.vue'
  import ArticleItem from '@/components/articleItem/index.vue'

  const filterList = ref([
    {
      name: '全部',
      id: '1',
      value: '0',
    },
    {
      name: 'js',
      id: '2',
      value: '1',
    },
  ])
  const filterFocus = ref('0')
  const navBarHeight = ref(0)
  const articleList = ref([])
  const topHight = ref(0)
  onMounted(()=>{
    let app = uni.getSystemInfoSync()
    let topHightO = app.statusBarHeight
    topHight.value = topHightO
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2
    navBarHeight.value = navBarHeightO
    fetchArticleList('')
  })
  const fetchArticleList = (id) => {
    getArticleList({id}).then((e)=>{
      const { data } = e
      if(data.code === 0) {
        articleList.value = data.data || []
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
  }
  const search = () => {

  }
  const input = () => {

  }
  const tabChange = (val) => {
    filterFocus.value = val
    const id = val === '0' ? '' : val
    fetchArticleList(id)
  }
  const upper = () => {

  }
  const lower = () => {

  }
  const scroll = () => {

  }
  const scrollTop = () => {

  }
</script>

<style lang='scss'>
	.content {
    height: 100%;
		display: flex;
		flex-direction: column;
    position: relative;
    .header {
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
        text-align: left;
        text-indent: 56rpx;
      }
    }
    .index_content {
      .swipper_border {
        display: flex;
        align-items: center;
        justify-content: center;
        .swipper_area {
          height: 360rpx;
          width: 645rpx;
        }
      }
      .tab_area {
        display: flex;
        align-items: center;
        gap: 42rpx;
        padding: 30rpx 55rpx 16rpx 55rpx;
      }
      .article_scroll {
        .article_area {
          align-items: center;
        }
      }
    }
    .index_content ::v-deep .uni-searchbar {
      padding: 20rpx 55rpx;
    }
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
