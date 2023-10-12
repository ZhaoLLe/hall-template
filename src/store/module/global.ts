import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    ttl: '',
    layout: 'classic',
    language: '',
    maximize: false,
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
    setMaximize(maximize: boolean) {
      this.maximize = maximize;
    },
  },
});
