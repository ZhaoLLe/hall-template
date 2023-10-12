<template>
  <el-tooltip :content="_t('header.helpCenter')" placement="bottom">
    <i class="iconfont icon-question-circle"></i>
  </el-tooltip>
</template>
<script setup lang="ts">
import { inject } from 'vue';
const _t = inject<any>('_t');
</script>
<style lang="less" scoped></style>
