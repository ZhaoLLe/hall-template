<template>
  <div :class="['home_card', { 'is-maximize': isMax }]">
    <div class="home_card_header">
      <h5>{{ props.title }}</h5>
      <div>
        <el-icon @click="hMax">
          <IEpFullScreen />
        </el-icon>
      </div>
    </div>
    <div class="home_card_content">
      <slot :is-maximize="globalStore.maximize" :close-max="closeMax" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/store/module/global';
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
const globalStore = useGlobalStore();
const isMax = ref(false);
const hMax = () => {
  isMax.value = !isMax.value;
  globalStore.setMaximize(!globalStore.maximize);
};
const closeMax = () => {
  isMax.value = false;
  globalStore.setMaximize(false);
};
</script>
<style lang="less" scoped>
.home_card {
  padding: 12px;
  box-sizing: border-box;
  background-color: var(--el-bg-color);

  .home_card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }

  .home_card_content {
    padding-top: 20px;
    height: calc(100% - 32px - 12px - 20px);
  }
}
</style>
