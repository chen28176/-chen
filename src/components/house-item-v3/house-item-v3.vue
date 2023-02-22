<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemDate?.image.url" alt="" srcset="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="" srcset="">
                    <span>{{ itemDate.location }}</span>
                </div>
                <div class="summary">{{ itemDate.summaryText }}</div>
                <div class="name">{{ itemDate.houseName }}</div>
                <div class="price">
                    <div class="new">￥{{ itemDate.finalPrice }}</div>
                    <div class="old">￥{{ itemDate.productPrice }}</div>
                    <div class="tip">{{ itemDate?.priceTipBadge?.text }}</div>
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
    font-size: 8px;
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
            display: flex;
            position: relative;
            flex-direction: column;
            padding: 8px 10px;
            color: rgb(39, 34, 34);
            .location{
                margin-bottom: 10px;
                height: 20px;
                padding: 0;
                color: rgb(91, 90, 90);
                height: 20px;
                img{
                    width:20px;
                    height:20px;
                }
            }
            .summary {
                font-size: 12px;
            }

            .name {
                margin: 5px 0;
                font-weight: bold;
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
                margin: 8px 0;
                .new{
                    color: #ff9645;
                    font-size: 14px;
                }
                .old{
                    margin: 0 3px;
                    color: #999;
                    font-size: 12px;
                    text-decoration: line-through;
                }
                .tip{
                    background-image: linear-gradient(270deg,#f66,#ff9f9f);
                    color: #fff;
                    padding: 0 6px;
                    border-radius: 8px;
                }
            }
        }
    }
}
</style>
