<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemDate.image.url" alt="" srcset="">
            </div>
            <div class="info">
                <div class="summary">{{ itemDate.summaryText }}</div>
                <div class="name">{{ itemDate.houseName }}</div>
                <div class="price">
                    <van-rate :model-value="itemStore">
                        <div class="new">{{ itemDate.finalPrice }}</div>
                    </van-rate>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    itemDate: {
        type: Object,
        default: () => ({})
    }
})
// 通过计算属性对数据中的浮点型进行转换 并渲染到页面
const itemStore = computed(() => {
    return Number(props.itemDate.commentScore)
})

</script>

<style lang='less' scoped>
.house-item {
    width: 50%;
    .item-inner {
        position: relative;
        margin: 5px;
        background: #fff;
        border-radius: 6px;
        overflow: hidden;

        .cover {
            img {
                width: 100%;
            }
        }

        .info {
            position: absolute;
            bottom: 0;
            padding: 8px 10px;
            color: #fff;

            .summary {
                font-size: 12px;
            }

            .name {
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .price {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
            }
        }
    }
}
</style>