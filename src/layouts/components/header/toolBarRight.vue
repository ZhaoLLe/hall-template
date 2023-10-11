<template>
  <div class="tool_bar_right flex flex-items-center">
    <Language />
    <div class="w-12px"></div>
    <Theme />
    <div class="w-12px"></div>
    <Fullscreen />
    <div class="w-12px"></div>
    <Help />
    <div class="w-12px"></div>
    <Avatar />
  </div>
</template>
<script setup lang="ts">
import Language from './components/language.vue';
import Avatar from './components/avatar.vue';
import Help from './components/help.vue';
import Fullscreen from './components/fullscreen.vue';
import Theme from './components/theme.vue';
</script>
