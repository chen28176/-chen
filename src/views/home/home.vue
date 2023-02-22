<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBoxVue />
    <HomeCategories />
    <HomeContent />
    <div class="search-bar" v-if="isShowSearchBar">
      <SearchBar />
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBoxVue from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue';
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll';
import SearchBar from '@/components/search-bar/search-bar.vue'
//发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData()
homeStore.fetchHotCategories()
homeStore.fetchHouseListData()

// 下拉刷新
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示与控制
const isShowSearchBar = ref(false)
watch(scrollTop, (newTop) => {
  isShowSearchBar.value = newTop > 350
})
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
