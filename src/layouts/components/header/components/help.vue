<template>
  <el-tooltip :content="_t('header.helpCenter')" placement="bottom">
    <el-icon>
      <IEpQuestionFilled />
    </el-icon>
  </el-tooltip>
</template>
<script setup lang="ts">
import { inject } from 'vue';
const _t = inject<any>('_t');
</script>
<style lang="less" scoped></style>
