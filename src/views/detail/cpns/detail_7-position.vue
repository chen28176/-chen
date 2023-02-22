<template>
    <div class="position">
        <DetailSection title="位置周边" more-text="查看更多周边信息">
            <div class="baidu-map" ref="mapRef"></div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
import { onMounted, ref } from 'vue';

const props = defineProps({
    positionData:{
        type:Object,
        default:() => ({})
    }
})

// 使用百度地图先要获取一个组件的实例 ref
const mapRef = ref()
// 页面初次加载的时候没有数据 挂载完毕才有
onMounted(() => {
    const map = new BMapGL.Map(mapRef.value) // 创建百度地图实例
    const point = new BMapGL.Point(props.positionData.longitude, props.positionData.latitude) // 传入经纬度
    map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
    const marker = new BMapGL.Marker(point) // 创建标注
    map.addOverlay(marker)
})
</script>
<style lang="less" scoped>
.position {
    .baidu-map {
        margin-top: 10px;
        width: 360px;
        height: 300px;
    }
}
</style>
