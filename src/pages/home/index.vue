<template>
  <p>this is home</p>
  <p>{{ t('home.welcome') }}</p>
  <el-table mb-1 :data="[]" />
  <el-pagination :total="100" />
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style lang="less" scoped>
p {
  color: red;
}
</style>
