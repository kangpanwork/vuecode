<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="功能目的">Lot（批次管理）是Operation Manager Services（OMS)的主模块之一，用户可以对Lot进行相关操作</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
    <el-steps direction="vertical"  :active="currentNode"  align-center >
  <el-step  @click.native="showNodeInfo(item)"  v-for="item in items" :key="item.index" :title="item.function" :description="item.description"></el-step>
</el-steps>
  </el-tab-pane>
  <el-tab-pane label="Lot Information Menu">
    展示批次状态，批次类型，Wafer数量，原材料ID，站点，流程，设备等信息

  <el-form :inline="true"  :label-position="labelPosition" style="margin-top:10px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="LotType">
          <el-input  placeholder="Production"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Total Wafer Count">
          <el-input  placeholder="25"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <el-form-item label="Lot Priority">
          <el-input  placeholder="1"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Sub Lot Type">
          <el-input  placeholder="JP"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <el-form-item label="Product Wafer Count">
          <el-input  placeholder="25"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Internal Priority">
          <el-input  placeholder="-1151.6699748333332"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <el-form-item label="Bank ID">
          <el-input  placeholder="Bank ID"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="NPW Wafer Count">
          <el-input  placeholder="0"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <el-form-item label="Parent Lot ID">
          <el-input  placeholder="Parent Lot ID"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Lag Time">
          <el-input  placeholder="Lag Time"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <el-form-item label="Due Time">
          <el-input  placeholder="2021-06-27 14:06:00.000"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Supplier Lot ID">
          <el-input  placeholder="Supplier Lot ID"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="Last Claimed Time">
          <el-input  placeholder="2021-06-27 14:06:00.000"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Q-Time">
          <el-input  placeholder="NO"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <el-form-item label="Lot Status">
          <el-input  placeholder="Waiting"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Last Claimed User">
          <el-input  placeholder="Shiqiang"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>

  </el-tab-pane>
  <el-tab-pane label="Detail">
    展示状态，包括批次状态，批次产品状态，批次暂停状态，批次完成状态，批次生产状态，批次库存状态

     <el-table
      :data="lotDetail"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="stateName"
        label="State Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stateValue"
        label="State Value"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
        width="180">
      </el-table-column>
   
    </el-table>

  </el-tab-pane>
  <el-tab-pane label="Operation">展示站点相关信息</el-tab-pane>
  <el-tab-pane label="Product">展示产品相关信息，包括晶舟及Wafer信息</el-tab-pane>
</el-tabs>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        // input lable 对齐方式
        labelPosition: 'top',
        items:[],
        currentNode: 0,
        lotDetail:[{stateName:'Lot State',stateValue: 'ACTIVE','description': '批次状态'},
        {stateName:'Lot Production State',stateValue: 'INPRODUCTION','description': '批次产品状态'},
        {stateName:'Lot Hold State',stateValue: 'NOTONHOLD','description': '批次暂停状态'},
        {stateName:'Lot Finished State',stateValue: '','description': '批次完成状态'},
        {stateName:'Lot Process State',stateValue: 'waiting','description': '批次生产状态'},
        {stateName:'Lot Inventory State',stateValue: 'OnFloor','description': '批次库存状态'}
        ]
      }
    },
  created: function () {
     this.getLotBatchManagementFlow()
  },

  methods: {
    getLotBatchManagementFlow() {
      let url = 'http://localhost:8028/api/bean/getLotBatchManagementFlow'
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