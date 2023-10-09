<template>
  <el-container>
    <el-header>
      <ToolBarLeft />
      <ToolBarRight />
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>
<script setup lang="ts">
import ToolBarLeft from '../components/header/toolBarLeft.vue';
import ToolBarRight from '../components/header/toolBarRight.vue';
</script>
