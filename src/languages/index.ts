import { createI18n } from 'vue-i18n';
import en from './module/en';
import zh from './module/zh';
import { getBrowserLang } from '@/utils';

const i18n = createI18n({
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    en,
    zh,
  },
});
export default i18n;
