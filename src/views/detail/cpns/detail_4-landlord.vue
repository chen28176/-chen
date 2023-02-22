<template>
    <div class="landlord">
        <detail-section title="房东介绍" more-text="查看房东主页">
            <!-- 房屋介绍 -->
            <div class="intro">
                <!-- 顶部图片 -->
                <div class="top-scroll">
                    <!-- 判断是否有图片如若没有隐藏  -->
                    <img v-if="landlordData.topScroll" :src="landlordData.topScroll" alt="房屋级别" />
                </div>
                <!-- 房东信息 -->
                <div class="landlord-infos">
                    <div class="left">
                        <img :src="landlordData.hotelLogo" class="avatar" />
                    </div>
                    <div class="center">
                        <!-- 标签 -->
                        <div class="hotel-name">{{ landlordData.hotelName }}</div>
                        <div class="tags">
                            <template v-for="(item, index) in landlordData.hotelTags" :key="index">
                                <span :style="{ color: item.tagText.color }">
                                    {{ item.tagText.text }}
                                    <span v-if="index !== landlordData.hotelTags.length - 1">
                                        |
                                    </span>
                                </span>
                            </template>
                        </div>
                    </div>
                    <div class="right">
                        <div class="contact">
                            <van-button color="linear-gradient(to right, #FA9021, #FCAE3E)" size="mini">
                                联系房东
                            </van-button>
                        </div>
                    </div>
                </div>
                <!-- 评价 -->
                <div class="evaluate">
                    <template v-for="(item, index) in landlordData.hotelSummary" :key="index">
                        <div class="hotel-summary">
                            <div class="title font-s">{{ item.title }}</div>
                            <div class="percent">{{ item.introduction }}</div>
                            <div class="count font-s">{{ item.tip }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
    landlordData: {
        type: Object,
        default: () => ({})
    },
})


</script>

<style lang="less" scoped>
.landlord {
    .intro {
        margin-top: 8px;

        // 头部图片
        .top-scroll {
            overflow: hidden;
            border-radius: 4px;

            img {
                width: 100%;
            }
        }

        // 房东信息
        .landlord-infos {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 6px 0;

            .left {
                margin-right: 8px;

                .avatar {
                    width: 50px;
                    height: 50px;
                }
            }

            .center {
                flex: 1;

                .hotel-name {
                    font-weight: 600;
                }

                .tags {
                    span {
                        font-size: 13px;
                    }
                }
            }
        }

        // 评价
        .evaluate {
            display: flex;
            justify-content: space-between;
            padding: 20px 6px;

            .hotel-summary {
                .percent {
                    padding: 5px 0;
                    font-weight: 600;
                }
            }
        }
    }
}

.font-s {
    font-size: 12px;
    color: #b2b2b3;
}
</style>