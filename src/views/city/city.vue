<template>
    <div class="city">
        <div class="top">
            <!-- 搜索框 -->
            <van-search placeholder="城市/区域/位置" v-model="searchValue" show-action shape="round" @cancel="cancelClick" />
            <!-- tab的切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854 ">
                <template v-for="(value, key, index) in allCities" :key="key">
                    <van-tab :title="value.title" :name = 'key'></van-tab>
                </template>
            </van-tabs>
        </div>
        <!-- 地方 -->
        <div class="content">
            <CityGroup :group-data="currentGroup"/>
        </div>
    </div>
</template>

<script setup>
import { ref , computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city';
import CityGroup from './cpns/city-group.vue'

const router = useRouter()
//搜索框功能
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}
// tab切换功能
const tabActive = ref("")
//网络请求：请求城市数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
// 获取选中对应标签后的数据
// 1 获取正确的key 将tads中绑定的tabAction正确绑定
// 2 根据allCities获取数据，但是获取的数据不是响应式的，所以通过computed计算属性包裹
const currentGroup = computed(()=> allCities.value[tabActive.value])
</script>

<style lang='less' scoped>
.city {
    .content {
        // 局部滚动样式
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}
</style>