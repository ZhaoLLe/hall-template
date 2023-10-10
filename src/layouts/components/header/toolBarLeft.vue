<template>
  <div class="tool_bar_left">
    <img src="/vite.svg" />
    <div style="width: 12px"></div>
    <el-dropdown>
      <span>
        北京哈哈哈有限公司
        <el-icon class="el-icon--right">
          <i-ep-arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in companyList" :key="item">
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const companyList = ref([
  '北京哈哈哈有限公司',
  '北京哈哈哈哈有限公司',
  '北京哈哈哈哈哈有限公司',
  '北京哈哈哈哈哈哈有限公司',
]);
</script>
<style lang="less" scoped>
.tool_bar_left {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
</style>
