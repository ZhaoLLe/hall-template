<template>
  <div class="layout_classic">
    <el-container>
      <el-header>
        <div class="header-lf">
          <ToolBarLeft />
        </div>
        <div class="header-ri">
          <ToolBarRight />
        </div>
      </el-header>
      <el-container class="classic-content">
        <el-aside>
          <Menu :menu-list="menuList" />
        </el-aside>
        <el-container class="classic-main">
          <router-view />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import ToolBarLeft from '../components/header/toolBarLeft.vue';
import ToolBarRight from '../components/header/toolBarRight.vue';
import Menu from '../components/menu/index.vue';
import menuList from '@/menu';

</script>
<style lang="less" scoped>
.layout_classic {
  width: 100%;
  height: 100%;

  :deep(.el-container) {
    width: 100%;
    height: 100%;

    .el-header {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 55px;
      padding: 0 15px 0 0;
      background-color: var(--el-header-bg-color);
      border-bottom: 1px solid var(--el-header-border-color);
      padding: 0 20px;

      .header-lf {
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;

        .logo {
          flex-shrink: 0;
          width: 210px;
          margin-right: 16px;

          .logo-img {
            width: 28px;
            object-fit: contain;
            margin-right: 6px;
          }

          .logo-text {
            font-size: 21.5px;
            font-weight: bold;
            color: var(--el-header-logo-text-color);
            white-space: nowrap;
          }
        }
      }
    }
  }

  .classic-content {
    display: flex;
    height: calc(100% - 55px);

    :deep(.el-aside) {
      width: auto;
      //   width: 200px;
      //   height: 100%;
      //   background-color: var(--el-menu-bg-color);
      //   border-right: 1px solid var(--el-menu-border-color);

      //   .aside-box {
      //     display: flex;
      //     flex-direction: column;
      //     height: 100%;
      //     transition: width 0.3s ease;

      //     .el-menu {
      //       width: 100%;
      //       overflow-x: hidden;
      //       border-right: none;
      //     }
      //   }
    }

    .classic-main {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
