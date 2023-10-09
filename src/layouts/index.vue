<template>
  <component :is="LayoutComponents[layout]" />
</template>
<script setup lang="ts">
import { type Component, computed } from 'vue';
import { useGlobalStore } from '../store/module/global';
import LayoutClassic from './LayoutClassic/index.vue';

const globalStore = useGlobalStore();
const LayoutComponents: Record<string, Component> = {
  classic: LayoutClassic,
};
const layout = computed(() => globalStore.layout);
</script>
