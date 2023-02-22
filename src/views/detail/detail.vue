<!-- 详情页开发  -->
<template>
    <div class="detail top-page">
        <van-nav-bar title="房屋详细" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <!-- 主要内容区域 如果mainPart有数据之后才渲染 -->
        <div class="main" v-if="mainPart">
            <div class="tabs">
                <van-tabs v-model:active="tabActive" scrollspy sticky title-active-color="#fca73e">
                    <!-- 简单描述 -->
                    <van-tab title="简单描述">
                        <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
                        <DetailInfos :top-infos="mainPart.topModule" />
                    </van-tab>
                    <!-- 房屋信息 -->
                    <van-tab title="房屋信息">
                        <DetailFacility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
                    </van-tab>
                    <!-- 房东介绍-->
                    <van-tab title="房东介绍">
                        <DetailLandlord :landlord-data="mainPart.dynamicModule.landlordModule" />
                    </van-tab>
                    <van-tab title="精选评论">
                        <DetailComment :comment-data="mainPart.dynamicModule.commentModule" />
                    </van-tab>
                    <!-- 预定须知 -->
                    <van-tab title="预定须知">
                        <DetailNotice :rules-data="mainPart.dynamicModule.rulesModule" />
                    </van-tab>
                    <!-- 周边信息 -->
                    <van-tab title="周边位置">
                        <DetailPosition :position-data="mainPart.dynamicModule.positionModule" />
                        <DateilIntro :intro-data="mainPart.introductionModule" />
                    </van-tab>
                    <div class="footer">
                        <img src="@/assets/img/detail/detailen.png" alt="" srcset="">
                        <h4>弘源旅途永无止境</h4>
                    </div>
                </van-tabs>
            </div>

        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getDetailInfos } from "@/services"
// 页面组件导入
import DetailSwipe from './cpns/detail_1-swipe.vue'
import DetailInfos from './cpns/detail_2-infos.vue'
import DetailFacility from './cpns/detail_3-facility.vue'
import DetailLandlord from './cpns/detail_4-landlord.vue'
import DetailComment from './cpns/detail_5-comment.vue'
import DetailNotice from './cpns/detail_6-notice.vue'
import DetailPosition from './cpns/detail_7-position.vue'
import DateilIntro from './cpns/detaili_8-intro.vue'

// tab 栏目相关
const tabActive = ref(0)
const route = useRoute()
const houseId = route.params.id
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)

getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data
})

// 监听返回按钮的点击
const onClickLeft = () => {
    router.back()
}
</script>

<style lang='less' scoped>
.footer {
    margin: 40px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        margin: 10px 0;
        width: 32.8vw;
    }
}
</style>