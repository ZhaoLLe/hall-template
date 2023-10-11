<template>
  <div class="sidebar-container">
    <ElScrollbar>
      <ElMenu
        :router="true"
        :default-active="$route.path"
        :collapse-transition="false"
        :collapse="collapsed"
        :style="{ width: collapsed ? '58px' : '100%' }"
      >
        <template v-for="item in menuList" :key="item.path">
          <template v-if="item.children && item.children.length > 0">
            <ElSubMenu :index="item.path">
              <template #title>
                <ElIcon v-if="item.icon">
                  <component :is="item.icon" />
                </ElIcon>
                <span>{{ item.name }}</span>
              </template>
              <ElMenuItem
                v-for="childItem in item.children"
                :key="childItem.path"
                :index="childItem.path"
              >
                {{ childItem.name }}
              </ElMenuItem>
            </ElSubMenu>
          </template>
          <template v-else>
            <ElMenuItem :index="item.path">
              <ElIcon v-if="item.icon">
                <component :is="item.icon" />
              </ElIcon>
              <span>{{ item.name }}</span>
            </ElMenuItem>
          </template>
        </template>
      </ElMenu>
    </ElScrollbar>
    <div
      :class="['collapse-btn', collapsed && 'collapsed']"
      @click="handleToggleCollapse"
    >
      <ElIcon>
        <template v-if="!collapsed">
          <IEpFold />
        </template>
        <template v-else>
          <IEpExpand />
        </template>
      </ElIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useCollapsed from './useCollapsed';
import type { MenuItem } from './type';

type SidebarProps = {
  menuList: MenuItem[];
};

withDefaults(defineProps<SidebarProps>(), {
  menuList: () => [],
});

const { collapsed, handleToggleCollapse } = useCollapsed();
</script>

<style lang="less" scoped>
.sidebar-container {
  position: relative;
  height: 100%;
  border-right: 1px solid var(--el-menu-border-color);
  overflow: hidden;
  max-width: 300px;

  .collapse-btn {
    align-items: center;
    // background-color: rgb(247, 248, 250);
    border-radius: 2px;
    bottom: 12px;
    // color: rgb(134, 144, 156);
    cursor: pointer;
    display: flex;
    height: 24px;
    justify-content: center;
    position: absolute;
    right: 12px;
    width: 24px;
  }

  .collapse-btn.collapsed {
    left: 50%;
    transform: translateX(-50%);
  }

  .el-menu {
    padding: 4px 8px;
    border-right: none;
    height: 100%;
    box-sizing: border-box;
  }

  .el-menu--collapse {
    padding: 4px;
  }

  .el-menu-item {
    margin-bottom: 4px;
  }

  .el-menu-item:hover {
    border-radius: 4px;
  }

  .el-menu-item.is-active {
    // background-color: rgb(242, 243, 245);
    border-radius: 4px;
  }
}

:deep(.el-sub-menu__title) {
  margin-bottom: 4px;
}

:deep(.el-sub-menu__title:hover) {
  border-radius: 4px;
}

:deep(.el-menu--collapse .el-menu-item) {
  justify-content: center;
  padding: 0;
}

:deep(.el-menu--collapse .el-sub-menu__title) {
  justify-content: center;
  padding: 0;
}
</style>
