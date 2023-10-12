<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="keepAliveName">
          <div v-if="isRouterShow" :key="route.fullPath + globalStore.language" class="el-main-content-ccc">
            <component :is="Component" />
          </div>
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/store/module/global';
import { useKeepAliveStore } from '@/store/module/keepAlive';
import { computed, provide, ref } from 'vue';
const globalStore = useGlobalStore();
const keepAliveStore = useKeepAliveStore();
const keepAliveName = computed(() => keepAliveStore.keepAliveName);
// 提供刷新当前页面的方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val);
provide('refresh', refreshCurrentPage);
// 使用方式
// const refreshCurrentPage: Function = inject("refresh") as Function;
// const refresh = () => {
//   setTimeout(() => {
//     keepAliveStore.removeKeepAliveName(route.name as string);
//     refreshCurrentPage(false);
//     nextTick(() => {
//       keepAliveStore.addKeepAliveName(route.name as string);
//       refreshCurrentPage(true);
//     });
//   }, 0);
// };
</script>
<style lang="less">
.el-main {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 24px;
  background-color: var(--el-bg-color-page);
}

.el-main-content-ccc {
  width: 100%;
  min-width: 1020px;
  height: 100%;
  background-color: var(--el-bg-color);
}
</style>
