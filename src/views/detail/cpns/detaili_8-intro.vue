
<template>
  <div class="intro">
    <DetailSection title="价格说明">
      <div class="inner">
        <p>{{ introData.introduction }}</p>
      </div>
    </DetailSection>
  </div>
</template>

<script setup lang="ts">
import DetailSection from '@/components/detail-section/detail-section.vue'

defineProps({
  
  introData: {
    type: Object,
    default: () => ({})
  }
})

</script>


<style scoped lang="less">
.intro {
  .inner {
    padding: 5px;

    p {
      font-size: 14px;
      color: #c6c4c7;
    }
  }
}
</style>
