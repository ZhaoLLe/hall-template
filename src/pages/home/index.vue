<template>
  <p>{{ _t('home.welcome') }}</p>
  <el-table mb-1 :data="[]" />
  <el-pagination :total="100" />
</template>
<script setup lang="ts">
import { inject } from 'vue';
const _t = inject<any>('_t');
</script>
<style lang="less" scoped>
p {
  color: red;
}
</style>
