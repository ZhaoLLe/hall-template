import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/index';
import router from './router';
import {
  gettoken,
  getUdesk,
  loginout,
  getuserinfo,
  getCompanyConfig,
  companyServiceEntrance,
} from '@/api';
import { useStorage } from '@vueuse/core';
import { useCookies } from '@vueuse/integrations/useCookies';
const cookies = useCookies();
// console.log('VITE_NODE_ENV ',  VITE_NODE_ENV);
// if (VITE_NODE_ENV === 'demos') console.log('demos');
const app = createApp(App);
function getQueryString(name: string): string | null {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const queryString = window.location.search.substr(1);
  const match = queryString.match(reg);
  if (match) {
    return decodeURIComponent(match[2]);
  }
  return null;
}
const visitorSign = useStorage('visitor-sign', '');
const source = useStorage('source', '');
const udesk = useStorage('udesk', '');
const companyId = useStorage('company_id', '');
const hiworkLogoutUrl =
  VITE_NODE_ENV == 'demos'
    ? 'http://demos-home.hiwork.com/login'
    : VITE_NODE_ENV === 'production'
    ? 'https://home.hiwork.com/login'
    : VITE_NODE_ENV === 'qa'
    ? 'http://qa-home.hiwork.com/login'
    : 'http://test-home.hiwork.com/login';

if (getQueryString('token')) {
  if (getQueryString('token') == 'NO_BIND') {
    visitorSign.value = 'PAYMENT_VISITOR_SIGN';
    window.location.href =
      window.location.protocol + '//' + window.location.host + '/nocompany';
  } else {
    visitorSign.value = null;
    source.value = getQueryString('from');
    if (!cookies.get('ttl')) {
      gettoken({ token: getQueryString('token') }).then((res: any) => {
        if (res.data.code == 22000) {
          cookies.set('showIndexMessage', true);
          cookies.set('ttl', res.data.result.ttl);
          getUdesk({}).then((res1: any) => {
            udesk.value = JSON.stringify(res1.data.result);
            cookies.set('udesk', JSON.stringify(res1.data.result));
            if (getQueryString('reback')) {
              window.location.href = getQueryString('reback') as string;
            } else {
              window.location.href =
                window.location.protocol + '//' + window.location.host;
            }
          });
        } else if (res.data.code == 22001) {
          window.location.href = `${hiworkLogoutUrl}?loginout=1`;
        }
      });
    } else {
      if (getQueryString('reback')) {
        window.location.href = getQueryString('reback') as string;
      } else {
        window.location.href =
          window.location.protocol + '//' + window.location.host;
      }
    }
  }
} else {
  router.beforeEach((to, from, next) => {
    let ttl = '0';
    if (cookies.get('ttl')) {
      ttl = cookies.get('ttl');
      getuserinfo({}).then((res: any) => {
        if (res.data.code == 22000) {
          cookies.set('userinfo', JSON.stringify(res.data.result));
          companyId.value = res.data.result.companyId;
          if (res.data.result.allow_access == 'yes') {
            // 有权限再判断是否开通过 经营结算 劳务结算 居间服务
            companyServiceEntrance({}).then((res1: any) => {
              if (res1.data.code == 22000) {
                cookies.set(
                  'is_open_service',
                  JSON.stringify(res1.data.result),
                );
              }
            });
            // 有权限判断再判断是否配置了垫款
            getCompanyConfig({}).then((res2: any) => {
              if (res2.data.code == 22000) {
                cookies.set(
                  'is_config_advance',
                  JSON.stringify(res2.data.result.is_config_advance),
                );
                cookies.set(
                  'is_config_coupon',
                  JSON.stringify(res2.data.result.is_config_coupon),
                );
                if (res2.data.result.is_config_advance) {
                  to.path === '/home' || to.path === '/noavaiable'
                    ? next({ path: '/index' })
                    : next();
                } else {
                  to.path === '/home' ||
                  to.path === '/noavaiable' ||
                  to.path === '/usercenter/advance'
                    ? next({ path: '/index' })
                    : next();
                }
              }
            });
          } else {
            if (
              to.path === '/home' ||
              to.path === '/noavaiable' ||
              to.path === '/nocompany'
            ) {
              next();
            } else {
              next({ path: '/noavaiable' });
            }
          }
        } else {
        }
      });
    } else {
      if (visitorSign.value) {
        next();
      } else {
        const ttlurl = `${hiworkLogoutUrl}?hiworkurl=${
          window.location.protocol
        }//${window.location.host}&reback=${encodeURIComponent(
          window.location.href,
        )}`;
        window.location.href = ttlurl;
      }
    }
  });
}

app.use(router);
app.use(store);

app.mount('#app');
