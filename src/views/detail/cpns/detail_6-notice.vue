<template>
    <div class="landlord">
        <detail-section title="预定须知">
            <div class="inner">
                <template v-for="(item, index) in rulesData.orderRules" :key="index">
                    <div class="item">
                        <div class="left f-s">{{ item.title }}</div>
                        <div class="right f-s">{{ item.introduction }}</div>
                        <div class="more f-s" v-if="item.title === '在线押金'">
                            查看说明
                        </div>
                    </div>
                </template>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
    rulesData: {
        type: Object,
        default: () => ({})
    },
})


</script>

<style lang="less" scoped>
.inner {
    margin-top: 10px;

    .item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;

        .left {
            width: 52px;
        }

        .right {
            flex: 1;
            margin-left: 14px;
        }

        .more {
            color: #000;
        }
    }
}

.f-s {
    font-size: 13px;
    color: rgb(109, 109, 109);
}</style>