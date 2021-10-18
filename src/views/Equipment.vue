<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="功能目的">设备模块</el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 流程</span>
    <el-steps direction="vertical"  :active="currentNode"  align-center >
      <el-step  @click.native="showNodeInfo(item)"  v-for="item in items" :key="item.index" :title="item.function" :description="item.description"></el-step>
    </el-steps>
  </el-tab-pane>
  <el-tab-pane label="Port Information">
    <el-table
      :data="portInformation"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="术语/缩写"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="释义"
        >
      </el-table-column>
    </el-table>
  </el-tab-pane>
    <el-tab-pane label="Status">
    <el-table
      :data="status"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="术语/缩写"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="释义"
        >
      </el-table-column>
    </el-table>
  </el-tab-pane>

    <el-tab-pane label="PM Information">
    <el-table
      :data="pmInformation"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="术语/缩写"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="释义"
        >
      </el-table-column>
    </el-table>
  </el-tab-pane>


    <el-tab-pane label="Eqp Basic Info">
    <el-table
      :data="eqpBasicInfo"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="术语/缩写"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="释义"
        >
      </el-table-column>
    </el-table>
  </el-tab-pane>

     <el-tab-pane label="Transfer">
    <el-table
      :data="transfer"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="术语/缩写"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="释义"
        >
      </el-table-column>
    </el-table>
  </el-tab-pane>


    <el-tab-pane label="Chamber Information">
    <el-table
      :data="chamberInformation"
      style="width: 100%;margin-top:10px">
      <el-table-column
        prop="text"
        label="术语/缩写"
        >
      </el-table-column>
      <el-table-column
        prop="value"
        label="释义"
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
        portInformation:[{text:'Port ID',value:'端口号'},
        {text:'Port Grp',value:'端口组，由一个或多个端口组成'},
        {text:'Load Seq',value:'上料优先级，一个端口组中端口上下料的优先级'},
        {text:'Loaded Carrier',value:'已上料载具'},
        {text:'Bonding Setting',value:'定义Bonding设备哪个端口load Top Lot，哪个端口load Base Lot'},
        {text:'Port state',value:'端口状态，有LoadReq，LoadComp，UnloadReq，UnloadComp，Unknown,Down'},
        {text:'Operation Mode',value:'端口操作模式（Offine，Auto，Manual）'},
        {text:'Load Usage Type',value:'端口可上料批次类型'},
        {text:'Reserved Carrier',value:'已预约晶舟信息'},
        {text:'Carrier Type Capability',value:'端口可以上料晶舟类型'},
        {text:'Associated Port ID',value:'关联端口，用于非可进可出类型端口关联另一个端口'},
        {text:'Port Usage',value:'端口类型,（只进，只出，可进可出）'},
        {text:'Dispatch State',value:'分派状态'},
        {text:'Time',value:'时间'},
        {text:'Disp.Load CarrierID',value:'分派上料晶舟编码'},
        {text:'Disp.Unload CarrierID',value:'分派下料晶舟编码'},
        {text:'Dis.Mode',value:'分派模式'},
        {text:'Move in Mode',value:'进站模式'},
        {text:'Move Out Mode',value:'出站模式'}],

        status:[{text:'Status',value:'机台状态,E10,Sub子状态，可用不可用'},
        {text:'Description',value:'描述'},
        {text:'Max Count Of Flowbatch',value:'最大允许生产数量'},
        {text:'Reserved Durable Job',value:'已预约的Durable Job（使用于Durable process Eqp）'},
        {text:'Last Recipe',value:'最近使用的配方'},
        {text:'Reserved Control Job',value:'已预约的Control Job ID'},
        {text:'Reserved Flow Batch',value:'Reserved Flow Batch'},
        {text:'Restriction',value:'是否有限制约束'},
        {text:'FMC Switch',value:'是否有FMC能力'}],

        pmInformation:[{text:'Run Wafer',value:'机台跑货晶圆的数量'},
        {text:'Max Run Wafer',value:'最大'},
        {text:'PM Interval Time',value:'PM间隔时间'},
        {text:'Move In Count',value:'Move in lot操作次数'},
        {text:'Run Time',value:'设备的Process时间（Move in——Move Out的累计时间）'},
        {text:'Max Run Time',value:'允许最长的设备的Process时间'},
        {text:'Last Main Time',value:'上次PM时间'},
        {text:'Max Move In Count',value:'最大的Move in次数'}],

        eqpBasicInfo:[{text:'Bay ',value:'工作区域'},
        {text:'Eqp Category ',value:'设备类型'},
        {text:'Eqp Owner ',value:'设备拥有者'},
        {text:'Special Control',value:'特殊的功能，如（MDS）'},
        {text:'Monitor Bank',value:'炉管Monitor关联BankID'},
        {text:'Dummy Bank',value:'挡控片仓库编号关联Bank ID'},
        {text:'EAP Host',value:'EAP Host'},
        {text:'Contamination Flag List',value:'污染等级'},
        {text:'Monitor Creation',value:'是否支持创建Mointor lot'},
        {text:'Reticle Use',value:'能否使用Reticle'},
        {text:'PJ  Control',value:'是否支持Process Job'},
        {text:'Carreier Change',value:'是否支持更换晶舟'},
        {text:'FMC Capability',value:'是否有FMC能力'},
        {text:'PR Control',value:'是否接受光阻对设备的污染 （拒绝/忽略）'}],

        transfer:[{text:'Eqp to Eqp Enabled',value:'是否支持机台到机台之间的搬运'},
        {text:'Take In/Take Out Enabled',value:'Auto 2模式下 允许天车在一个批次在unload Request时就做预约上料'}],

        chamberInformation:[{text:'Chamber ID',value:'腔体编码'},
        {text:'Status',value:'状态'},
        {text:'Sub Status',value:'子状态'},
        {text:'Restriction',value:'是否有限制约束'},
        {text:'Contamination Flag List',value:'污染等级'}],
        currentNode: 0,
      }
    },
  created: function () {
     this.getEquipmentFlow()
  },

  methods: {
    getEquipmentFlow() {
      let url = 'http://localhost:8028/api/bean/getEquipmentFlow'
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