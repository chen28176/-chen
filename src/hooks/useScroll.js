import { onMounted, onUnmounted, ref } from 'vue'

import { throttle } from 'underscore'
export default function useScroll() {
    const isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    //防抖/节流 一秒后更新下拉数据
    const scrollListenerHandler = throttle(() => {
        // 页面的高度
        clientHeight.value = document.documentElement.clientHeight
        // 滚动的高度
        scrollTop.value = document.documentElement.scrollTop
        // 元素内容的高度,包括溢出的不可见内容
        scrollHeight.value = document.documentElement.scrollHeight
        // 当页面的高度 加上 滚动的高度 等于 等于溢出内容的高度时开始进行数据更新
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            isReachBottom.value = true
        }
    },300)

    // 挂载
    onMounted(() => {
        window.addEventListener("scroll", scrollListenerHandler)
    })
    // 卸载
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListenerHandler)
    })

    return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}