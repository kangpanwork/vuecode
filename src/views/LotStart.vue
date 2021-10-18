<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="功能目的">用户可以对不同产品工单产生的批次进行批次下线的操作</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
    <el-steps direction="vertical"  :active="currentNode"  align-center >
      <el-step  @click.native="showNodeInfo(item)"  v-for="item in items" :key="item.index" :title="item.function" :description="item.description"></el-step>
    </el-steps>
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
      }
    },
  created: function () {
     this.getBayFlow()
  },

  methods: {
    getBayFlow() {
      let url = 'http://localhost:8028/api/bean/getLotStartFlow'
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