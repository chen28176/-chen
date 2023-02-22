<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swipeData">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="" srcset="">
                </van-swipe-item>
            </template>

            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <!-- {{ active }}/{{ swipeData.length }}-{{ total }} -->
                    <template v-for="(value, key, index) in swipeGroup" :key="key">
                        <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
                            <span class="text" >
                                {{ getName(value[0].title) }}
                            </span>
                            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
                            </span>
                        </span>

                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>

const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})
//对数据进行转换
const swipeGroup = {}
//思路一
// for(const item of props.swipeData){
//     swipeGroup[item.enumPictureCategory] = []
// }
// for (const item of props.swipeData){
//     const valueArray = swipeGroup[item.enumPictureCategory]
//     valueArray.push(item)
// }
// 思路二
for (const item of props.swipeData) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    if (!valueArray) {
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
}
// 删除数据中不需要的符号
const nameReg = /【(.*?)】/i
const getName = (name) => {
    // return name.replace("：","").replace("【","").replace("】","")
    const results = nameReg.exec(name)
    return results[1]
}

const getCategoryIndex = (item) => {
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang='less' scoped>
.swipe {
    .swipe-list {
        .item {
            img {
                width: 100%;
            }
        }

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.5);

            .item {
                margin: 0 3px;

                &.active {
                    background-color: #fff;
                    color: #233;
                    padding: 1px 3px;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>