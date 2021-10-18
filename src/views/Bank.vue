<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="功能目的">Bank（储存仓管理模块）是Operation Manager Services（OMS)的主要模块之一，用户可以围绕Bank做不同操作</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
    <el-steps direction="vertical"  :active="currentNode"  align-center >
      <el-step  @click.native="showNodeInfo(item)"  v-for="item in items" :key="item.index" :title="item.function" :description="item.description"></el-step>
    </el-steps>
  </el-tab-pane>
  <el-tab-pane label="Bank Information">
    <el-table
      :data="bankInformation"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="field"
        width="180">
      </el-table-column>
      <el-table-column
        prop="value"
        label="description"
        width="180">
      </el-table-column>
    </el-table>
  </el-tab-pane>
  <el-tab-pane label="Lots In Bank">
    <el-table
      :data="lotsInBank"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="field"
        width="180">
      </el-table-column>
      <el-table-column
        prop="value"
        label="description"
        width="180">
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
        bankInformation:[],
        lotsInBank:[]
      }
    },
  created: function () {
     this.getBankFlow()
     this.getBankInformation()
     this.getLotsInBank()
  },

  methods: {
    getBankFlow() {
      let url = 'http://localhost:8028/api/bean/getBankFlow'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.items = response.data
        }
      })
    },
    getBankInformation() {
     let url = 'http://localhost:8028/api/bean/getBankInformation/Bank_Information'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.bankInformation = response.data
        }
      })
    },
    getLotsInBank() {
      let url = 'http://localhost:8028/api/bean/getBankInformation/Lots_In_Bank'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.lotsInBank = response.data
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