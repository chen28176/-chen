<template>
    <div class="Comment">
        <detailSection title="精选评论" more-text="查看更多">
            <!-- 评分 -->
            <div class="score">
                <h2 class="overall">
                    {{ commentData.overall }}
                    <div class="line"></div>
                </h2>
                <div class="stars">
                    <div class="score-title">{{ commentData.scoreTitle }}</div>
                    <div class="total-count">{{ commentData.totalCount }}条评论</div>
                    <div class="rate">
                        <van-rate :model-value="commentData.totalCount" readonly allow-half color="#FDA24F" size="14" />
                    </div>
                </div>
                <div class="focus">
                    <template v-for="(item, index) in commentData.subScoresFocus" :key="index">
                        <div class="focus-item">
                            {{ item.text }}
                        </div>
                    </template>
                </div>
            </div>
            <!-- 标签 -->
            <div class="tags">
                <template v-for="(item, index) in commentData.commentTagVo" :key="index">
                    <div class="tags-item" :style="{
                        color: item.color,
                        backgroundColor: item.backgroundColor
                    }">
                        {{ item.text }}
                    </div>
                </template>
            </div>
            <!-- 用户评论 -->
            <div class="user-comment">
                <div class="user-info">
                    <div class="avatar">
                        <img :src="commentData.comment.userAvatars" alt="用户头像" />
                    </div>
                    <div class="date">
                        <div class="username">{{ commentData.comment.userName }}</div>
                        <div class="check-date">{{ commentData.comment.checkInDate }}</div>
                    </div>
                </div>
                <div class="content">
                    <div class="text">{{ commentData.comment.commentDetail }}</div>
                </div>
            </div>
        </detailSection>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
    commentData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
// 上面的评分部分
.score {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    // 右边评分总分
    .overall {
        position: relative;
        width: 50px;
        text-align: center;
        font-size: 44px;
        color: #333;

        .line {
            position: absolute;
            top: 36px;
            z-index: -1;
            background: #fda24f;
            width: 55px;
            height: 5px;
        }
    }

    // 中间的赞 评论 星
    .stars {
        margin-left: 15px;

        .score-title {
            margin-bottom: 5px;
            font-size: 16px;
        }

        .total-count {
            margin-bottom: 2px;
            font-size: 13px;
            color: #aeadb0;
        }
    }

    .focus {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        margin-left: 28px;
        padding: 6px;

        .focus-item {
            width: 50%;
            margin: 2px 0;
            font-size: 12px;
            color: #717171;
        }
    }
}

// 中间的标签部分
.tags {
    display: flex;
    flex-wrap: wrap;

    .tags-item {
        margin: 3px 5px;
        padding: 4px;
        border-radius: 6px;
        font-size: 13px;
    }
}

// 底部用户评论
.user-comment {
    margin-top: 10px;
    padding: 8px;
    background: #f7f9fb;

    .user-info {
        display: flex;

        .avatar {
            border-radius: 50%;
            overflow: hidden;
            margin-right: 5px;

            img {
                width: 36px;
                height: 36px;
            }
        }

        .date {
            .check-date {
                font-size: 12px;
                color: #d5d5d5;
            }
        }
    }

    .content {
        margin-top: 10px;

        .text {
            width: 340px;
            font-size: 13px;
        }
    }
}
</style>