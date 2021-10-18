<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="简介">Lot List(Lot清单)是Operation Manager Services（OMS)的主模块MISC下的子模块之一</el-tab-pane>
  <el-tab-pane label="功能目的">用户可以通过这个界面按照搜索条件对lot进行查询，并可以将查询到的lot选中，进行bank in，lot start cancel等其他功能的操作</el-tab-pane>
  <el-tab-pane label="功能范围">Lot List主要提供Lot查询的功能，对查询到的lot可以选中操作，链接到bank in，lot start cancel等功能操作</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
    <el-steps direction="vertical"  :active="currentNode"  align-center >
      <el-step  @click.native="showNodeInfo(item)"  v-for="item in items" :key="item.index" :title="item.function" :description="item.description"></el-step>
    </el-steps>
  </el-tab-pane>
    <el-tab-pane label="术语">
    <el-table
      :data="lotList"
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
import axios from 'axios'
  export default {
    data() {
      return {
        items:[],
        currentNode: 0,
        lotList:[{text:'Lot id',value:'Lot的编码，支持全码或者部分码搜索'},
        {text:'Lot Status',value:'下拉式选项，Lot的状态（ONHOOD/Waiting等）'},
        {text:'Lot Type',value:'下拉式选项，Lot的类型（Production/Dummy等）'},
        {text:'Bank ID',value:'下拉式选项，Lot所在的Bank'},
        {text:'Product ID',value:'Lot的产品ID'},
        {text:'Order No',value:'Order No'},
        {text:'Customer ID',value:'客户的ID'},
        {text:'Manufacture Layer',value:'下拉式选项（0：；A：）'},
        {text:'Process Flow ID',value:'Lot 所在Process的ID'},
        {text:'Operation Number',value:'站点编号'},
        {text:'Carrier Type',value:'下拉式选项（FOSB；FOUP）'},
        {text:'Sub Lot Type',value:'下拉式选项，Lot的子类型（Dummy/Process等）'},
        {text:'Hold Reason Code',value:'下拉式选项，Hold的原因code'},
        {text:'Carrier Category',value:'下拉式选项，Carrier的类别'},
        {text:'Bank-In Required',value:'若勾选，表示选择只显示位于End Bank的前一Step的Lot'},
        {text:'Virtual Ops',value:'虚拟的Step，Lot不会真正进机台进行操作'},
        {text:'Auto  Dispatch Disabled Lot',value:'Lot是否被定义自动派工'},
        {text:'Detail Info',value:'Lot的详细的信息'},
        {text:'Bank in ',value:'对选中的lot执行Bank in(入库)操作'},
        {text:'Bank in cancel',value:'对选中的lot执行Bank in cancel(取消入库)操作'},
        {text:'Lot start cancel',value:'已经Lot Start的lot进行cancel操作'},
        {text:'New Run Card',value:'对Lot新建Run Card ID'},
        {text:'PSM list',value:'对Lot分/合批进行设定'},
        {text:'DOC SetUp',value:'DOC的设定'},
        {text:'WIP Lot Reset',value:'Lot重新进站'}]
      }
    },
  created: function () {
     this.getLotListFlow()
  },

  methods: {
    getLotListFlow() {
      let url = 'http://localhost:8028/api/bean/getLotListFlow'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.items = response.data
        }
      })
    },
    showNodeInfo(item) {
      this.currentNode = item.index
      this.$alert(item.remarks,'操作步骤',{
        confirmButtonText: '确定',
        callback: () => {
            
          }
        });
    }
  }
}
</script>