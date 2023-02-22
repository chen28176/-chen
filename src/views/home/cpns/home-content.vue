<!-- 精选内容 -->
<template>
    <div class="content">
        <h2 class="title">精选内容</h2>
        <div class="list">
            <template v-for="(item, index) in houseList" :key="item.data.houseId" >
                <house-item-v9 v-if="item.discoveryContentType === 9" :item-date="item.data" @click="itemClick(item.data)"/>
                <house-item-v3 v-else-if="item.discoveryContentType === 3" :item-date="item.data" @click="itemClick(item.data)"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue"
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue"
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";

const homeStore = useHomeStore()
const { houseList } =storeToRefs(homeStore)
const router = useRouter()
const itemClick =(item) =>{
    // 跳转到detail
    router.push("/detail/" + item.houseId)
}
</script>

<style lang='less'>
.content {
    .title {
        font-size: 22px;
        margin: 2px 8px;
        padding: 10px;
    }

    .list {
        padding: 10px;
        display: flex;
        flex-flow: wrap;
    }
}
</style>