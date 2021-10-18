<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="简介">Process Hold List是Operation Manager Services（OMS)主模块MISC的子模块之一</el-tab-pane>
  <el-tab-pane label="功能目的">此功能用于对已经注册的Process Hold的查询，显示，以及选中取消Process Hold的操作</el-tab-pane>
  <el-tab-pane label="功能范围">Process Hold List子模块由如下显示界面组成</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
      <el-collapse>
    <el-collapse-item>
      <template slot="title">
      Process Hold Search
      <i class="header-icon el-icon-info"></i>
    </template>
      <div>此部分通过输入特定的条件对Process Hold进行查询</div>
    </el-collapse-item>
    <el-collapse-item>
        <template slot="title">
        Registered Process Hold List<i class="header-icon el-icon-info"></i>
        </template>
      <div>此部分是显示已经注册的Process Hold的List</div>
    </el-collapse-item>
    <el-collapse-item >
            <template slot="title">
     Select Process Hold<i class="header-icon el-icon-info"></i>
    </template>
      <div>此部分是显示鼠标选中的Process Hold的详细信息</div>
    </el-collapse-item>
        <el-collapse-item >
            <template slot="title">
      Registration Cancel<i class="header-icon el-icon-info"></i>
    </template>
      <div> 此部分是对选中的Process Hold的记录进行取消操作</div>
    </el-collapse-item>
    </el-collapse>  
  </el-tab-pane>
    <el-tab-pane label="术语">
    <el-table
      :data="processHoldList"
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
        processHoldList:[{text:'Process Flow ID',value:'全码输入，要查询Process Hold的Process Flow ID'},
        {text:'Operation Number',value:'全码输入，要查询Process Hold的站点编号'},
        {text:'User ID',value:'全码输入，Process Hold的注册人ID'},
        {text:'Product ID',value:'全码输入，要查询Process Hold的Product'}]
      }
    },
  created: function () {
  },

  methods: {

  }
}
</script>