<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="简介">Constraint List是Operation Manager Services（OMS)主模块MISC的子模块之一</el-tab-pane>
  <el-tab-pane label="功能目的">用户可以暂时限制生产资源或规格信息。生产资源包括设备，规格信息包括工艺信息、工艺规范、配方和产品。其目的是调查、分析和维护生产资源和规格信息，以提高产品质量和进行在制品负载平衡</el-tab-pane>
  <el-tab-pane label="功能范围">Constraint List子模块由查询界面和编辑界面两部分组成</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
    <el-steps direction="vertical"  :active="currentNode"  align-center >
      <el-step  @click.native="showNodeInfo(item)"  v-for="item in items" :key="item.index" :title="item.function" :description="item.description"></el-step>
    </el-steps>
  </el-tab-pane>
    <el-tab-pane label="术语">
    <el-table
      :data="constraintList"
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
        constraintList:[{text:'Constraint Type',value:'限制的类型，下拉式选项（Product/Route/Step等）'},
        {text:'Status',value:'下拉式选项，Constraint目前的状态（Active：生效中；Inactive：未生效中）'},
        {text:'Reason Code',value:'Constraint 的原因代码编号'},
        {text:'Constraint ID',value:'Constraint的编号，通识符输入'}]
      }
    },
  created: function () {
     this.getConstraintListFlow()
  },

  methods: {
    getConstraintListFlow() {
      let url = 'http://localhost:8028/api/bean/getConstraintListFlow'
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