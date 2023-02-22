<template>
  <div class="app">
    <router-view/>
    <tab-bar v-if="!router.meta.hideTadBar"/>
  </div>
  <Loading/>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
import { useRoute } from "vue-router";

const router = useRoute()
</script>

<style scoped>

</style>