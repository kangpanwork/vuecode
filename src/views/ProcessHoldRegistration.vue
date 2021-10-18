<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="简介">Process Hold Registration是Operation Manager Services（OMS)主模块MISC的子模块之一</el-tab-pane>
  <el-tab-pane label="功能目的">此功能用于进行对到达指定站点的Lot进行暂停（被Hold的Lot为了做一些实验等等）。Process Flow ID和站点编号是定义Process Hold的条件，产品ID也可用作注册Process Hold的条件之一</el-tab-pane>
  <el-tab-pane label="功能范围">Process Hold Registration子模块由注册界面组成</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
      <el-collapse>
    <el-collapse-item>
      <template slot="title">
      Select Reason Code For Process Hold
      <i class="header-icon el-icon-info"></i>
    </template>
      <div>此部分是选择注册Process Hold的部门和原因信息</div>
    </el-collapse-item>
    <el-collapse-item>
        <template slot="title">
         Select Hold Operation For Process Hold<i class="header-icon el-icon-info"></i>
        </template>
      <div>此部分是选择要进行Process Hold的Process Flow Type，Process Flow ID 和站点信息</div>
    </el-collapse-item>
    <el-collapse-item >
            <template slot="title">
     Execute Hold For WIP Lots On Selection Operation<i class="header-icon el-icon-info"></i>
    </template>
      <div>此部分是选择Process Hold是否包括当站的Lot</div>
    </el-collapse-item>
        <el-collapse-item >
            <template slot="title">
     Hold Product<i class="header-icon el-icon-info"></i>
    </template>
      <div> 此部分是选择要进行Process Hold的Product</div>
    </el-collapse-item>
    </el-collapse>  
  </el-tab-pane>
    <el-tab-pane label="术语">
    <el-table
      :data="processHoldRegistration"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="field"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="description"
       >
      </el-table-column>
    </el-table>
  </el-tab-pane>
</el-tabs>
</div>
</template>

<script>
  export default {
    data() {
      return {
        items:[],
        currentNode: 0,
        processHoldRegistration:[{text:'Department',value:'下拉式选项，哪个部门的注册的Process Hold'},
        {text:'Section',value:'下拉式选项，部门的下一级，哪个科室注册的Process Hold'},
        {text:'Reason Code',value:'下拉式选项，注册Process Hold 的原因代码编号'},
        {text:'Process Flow',value:'下拉式选项，注册Process Hold的Process Flow的'},
        {text:'Type',value:'类型是什么（Production/Dummy/Recycle等）'},
        {text:'Process Flow ID',value:'需要注册Process Hold的Process Flow 的ID'},
        {text:'Ope No',value:'需要注册Process Hold的站点的编号'},
        {text:'Product ID',value:'要注册Process Hold的Product ID'}]
      }
    },
  created: function () {
  },

  methods: {

  }
}
</script>