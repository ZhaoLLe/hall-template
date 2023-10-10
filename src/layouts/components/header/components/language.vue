<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <el-icon class="el-icon--right">
      <IEpInfoFilled />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in languageList" :key="item.value" :command="item.value"
          :disabled="language === item.value">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGlobalStore } from "@/store/module/global";
//@ts-ignore
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const globalStore = useGlobalStore();
const language = computed(() => globalStore.language);

const languageList = [
  { label: "简体中文", value: "zh" },
  { label: "English", value: "en" }
];

const changeLanguage = (lang: string) => {
  i18n.locale.value = lang;
  globalStore.setLanguage(lang);
};
</script>