<template>
  <el-dropdown trigger="click">
    <div class="avatar bg-#ccc">
      <img src="/vite.svg" alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item class="pointer-events-none">
          <div>你好，15035457726</div>
        </el-dropdown-item>
        <el-dropdown-item divided @click="goPersonalData">
          {{ _t('header.personalSetting') }}
        </el-dropdown-item>
        <el-dropdown-item @click="hLogOut">
          {{ _t('header.logout') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { loginout } from '@/api';
import { useStorage } from '@vueuse/core';
import { useCookies } from '@vueuse/integrations/useCookies';
const _t = inject<any>('_t');

const router = useRouter();

const goPersonalData = () => {
  router.push('/personalSetting');
};

const hiworkLogoutUrl =
  VITE_NODE_ENV == 'demos'
    ? 'http://demos-home.hiwork.com/login'
    : VITE_NODE_ENV === 'production'
    ? 'https://home.hiwork.com/login'
    : VITE_NODE_ENV === 'qa'
    ? 'http://qa-home.hiwork.com/login'
    : 'http://test-home.hiwork.com/login';
const cookies = useCookies();
const visitorSign = useStorage('visitor-sign', '');
const source = useStorage('source', '');
const udesk = useStorage('udesk', '');
const companyId = useStorage('company_id', '');
const hisnotice = useStorage('hisnotice', '');

const hLogOut = () => {
  if (visitorSign.value) {
    visitorSign.value = null;
    window.location.href = `${hiworkLogoutUrl}?loginout=1`;
  } else {
    loginout().then((res) => {
      if (res.data.code == 2200) {
        cookies.remove('showIndexMessage');
        cookies.remove('ttl');
        cookies.remove('userinfo');
        cookies.remove('popped');
        cookies.remove('udesk');
        companyId.value = null;
        hisnotice.value = null;
        udesk.value = null;
        if (source.value == 'hiwork') {
          source.value = null;
          window.location.href = `${hiworkLogoutUrl}?reback=${encodeURIComponent(
            window.location.href,
          )}&loginout=1`;
        } else {
          let ttlurl =
            hiworkLogoutUrl +
            '?hiworkurl=' +
            window.location.protocol +
            '//' +
            window.location.host +
            '&reback=' +
            encodeURIComponent(window.location.href) +
            '&loginout=1';
          window.location.href = ttlurl;
        }
      }
    });
  }
};
</script>
<style scoped lang="less">
.avatar {
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
