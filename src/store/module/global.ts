import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    ttl: '',
    layout: 'classic',
    language: '',
  }),
  actions: {
    setTtl(ttl: string) {
      this.ttl = ttl;
    },
    setLayout(layout: string) {
      this.layout = layout;
    },
    setLanguage(language: string) {
      this.language = language;
    },
  },
});
