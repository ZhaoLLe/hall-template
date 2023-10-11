<template>
  <el-icon @click="toggleDark()">
    <i-ep-moon v-if="isDark" />
    <i-ep-sunny v-else />
  </el-icon>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>