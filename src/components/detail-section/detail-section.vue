<template>
    <div class="section">
        <div class="header">
            <h2 class="title">{{ title }}</h2>
        </div>
        <div class="content">
            <slot>

            </slot>
        </div>
        <div class="footer">
            <span class="more">查看全部内容</span>
            <van-icon name="arrow"></van-icon>
        </div>
</div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '默认标题'
    },
    moreText: {
        type: String,
        default: "查看全部"
    }
})
</script>

<style lang="less" scoped>
.section {
    display: flex;
    padding: 0 20px;
    color: #999;
    border-top: 5px solid #f2f3f4;
    flex-direction: column;


    .header {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;

        .title {
            font-size: 20px;
            color: #333;
        }
    }

    .content {
        padding: 8px 0;
    }

    .footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 44px;
        line-height: 44px;
        color: #ff9645;
        font-size: 14px;
        font-weight: 600;

        .more {
            color: #ff9645;
        }
    }
}
</style>
