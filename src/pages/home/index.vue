<template>
  <div class="home">
    <div class="home_welcome">
      {{ _t('home.welcome') }}
    </div>
    <div class="home_modules">
      <div class="home_modules_left">
        <Card :title="_t('home.quickEntry')" style="height: 180px">
          <template #default="scoped">
            <div class="entry">
              <div v-for="(i, idx) in entrys" :key="i.path" class="entry_item" :style="{
                marginRight:
                  idx != 1 ? '12px' : scoped.isMaximize ? '12px' : '0',
                marginBottom: scoped.isMaximize ? '12px' : '0',
              }" @click="$router.push(i.path)">
                {{ i.name }}
              </div>
            </div>
          </template>
        </Card>
        <div class="h-20px"></div>
        <Card :title="_t('home.pendingPaym')" style="height: 600px">
          <List />
        </Card>
      </div>
      <div class="home_modules_right">
        <Card :title="_t('home.collectionAccount')" style="height: 100%">
          <List />
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import Card from './components/card.vue';
import List from './components/list.vue';
import { getuserinfo } from '@/api';
getuserinfo({})
const _t = inject<any>('_t');
const entrys = [
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/batch', name: _t('menu.batchsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
  { path: '/settlement/detail', name: _t('menu.detailsettlement') },
];
</script>
<style lang="less" scoped>
.home {
  height: 100%;

  .home_welcome {
    display: flex;
    height: 120px;
    background-color: var(--el-bg-color);
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .home_modules {
    display: flex;
    height: calc(100% - 140px);

    .home_modules_left {
      width: 400px;
      margin-right: 18px;
      height: 100%;
      overflow-y: auto;

      .entry {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-content: flex-start;

        .entry_item {
          width: 182px;
          margin-right: 12px;
          height: 92px;
          background: var(--el-bg-color-page);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .home_modules_right {
      flex: 1;
    }
  }
}
</style>
