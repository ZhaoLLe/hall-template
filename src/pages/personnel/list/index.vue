<template>
  <div class="personnel_list">
    <h3>{{ $t('menu.personnelmanagement') }}</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input
          v-model="formInline.user"
          placeholder="Approved by"
          clearable
        />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select
          v-model="formInline.region"
          placeholder="Activity zone"
          clearable
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%; height: 450px">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination
      class="float-right"
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

defineOptions({
  name: 'PersonnelList',
});
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const formInline = reactive({
  user: '',
  region: '',
  date: '',
});

const onSubmit = () => {
  // console.log('submit!')
};
</script>

<style lang="less" scoped>
.personnel_list {
  height: 100%;
  background-color: var(--el-bg-color);
  padding: 12px;
  box-sizing: border-box;
}
</style>
<route>
  {
    name: "PersonnelList",
  }
</route>
