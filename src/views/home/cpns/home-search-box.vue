<template>
    <div class="search-box">
        <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
        <!-- 日期范围 -->
        <div class="section date-range" @click="showCalendar = true">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{ startDateStr }}</span>
                </div>
                <div class="stay">
                    共{{ stayCount }}晚
                </div>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{ endDateStr }}</span>
                </div>
            </div>
        </div>
        <!-- 日历 -->
        <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" :show-confirm="false"
            @confirm="onConfirm" />
        <div class="section price-counter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>
        <div class="section keyword bottom-gray-line">关键字/位置/名宿名</div>

        <!-- 热门建议 -->
        <div class="section hot-suggests">
            <template v-for="(item, index) in hotSuggests" :key='index'>
                <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>

        <!-- 搜索按钮 -->
        <div class="section search-btn">
            <div class="btn" @click="searchBtnClick">开始搜索</div>
        </div>
    </div>
</template>

<script  setup>

import { ref, computed } from 'vue';
import router from '@/router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeStore from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main'

//当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
const cityClick = () => {
    router.push('/city')
}
const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("位置获取成功：", res)
    }, err => {
        console.log('获取位置失败：', err)
    })
}
useMainStore()
//日期范围处理
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))

const stayCount = ref(getDiffDays(startDate.value, endDate.value))
const showCalendar = ref(false)
const onConfirm = (value) => {
    // 设置日期
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    mainStore.startDate = selectStartDate
    mainStore.startDate = selectEndDate
    stayCount.value = getDiffDays(selectStartDate, selectEndDate)
    // 隐藏日历
    showCalendar.value = false
}

//热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore);

//开始搜索
const searchBtnClick = () => {
    router.push({
        path: "/search",
        query: {
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity: currentCity.value.cityName
        }
    })
}
</script>
<style lang='less' scoped>
.search-box {
    --van-calendar-popup-height: 100%;
}

.location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
        flex: 1;
        color: #333;
        font-size: 14px;
    }

    .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
            position: relative;
            font-size: 12px;
            color: #666;
        }

        img {
            margin-left: 3px;
            width: 18px;
            height: 18px;
        }
    }
}

.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    margin-left: 20px;

    .start {
        flex: 1;
        display: flex;
        height: 44px;
        align-items: center;
    }

    .end {
        min-width: 30%;
    }

    .date {
        display: flex;
        flex-direction: column;
    }

    .tip {
        font-size: 12px;
        color: #999;
    }

    .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
    }
}

.search-btn {
    margin: 0px;

    .btn {
        width: 342px;
        height: 38px;
        max-height: 50px;
        font-weight: 500;
        font-size: 18px;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-image: var(--tjc-theme-linear-gradient);
    }
}

.date-range {
    display: flex;
    height: 44px;

    .stay {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #666;
    }
}

.price-counter {
    .start {
        border-right: 1px solid #f9f8f7;
        margin-right: 14px;
    }
}

.hot-suggests {
    margin: 10px 10px;
    height: auto;

    .item {
        padding: 4px 8px;
        font-size: 10px;
        border-radius: 10px;
        margin: 5px 3px;
    }
}

.keyword {
    height: 44px;
}
</style>