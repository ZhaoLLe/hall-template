import { Avatar, HomeFilled, List } from '@element-plus/icons-vue';
import Dashboard from '@/assets/vue.svg?component';
import i18n from './languages/index';
import { computed } from 'vue';
const { t } = i18n.global;

const menuList = computed(() => [
  {
    path: '/home',
    name: t('menu.home'),
    icon: HomeFilled,
  },
  {
    path: '/personnel/list',
    name: t('menu.personnelmanagement'),
    icon: Avatar,
  },
  {
    path: '/settlement',
    name: t('menu.settlementmanagement'),
    icon: List,
    children: [
      {
        path: '/settlement/batch',
        name: t('menu.batchsettlement'),
      },
      {
        path: '/settlement/detail',
        name: t('menu.detailsettlement'),
      },
    ],
  },
]);
export default menuList;
