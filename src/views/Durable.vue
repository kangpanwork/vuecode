
<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="功能目的">
    Durable（耐用品管理）模块由光罩列表清单，光罩信息，载具列表清单，晶舟信息，光罩盒清单和光罩盒信息六个子模块组成
    </el-tab-pane>
  <el-tab-pane label="主要模块">

    <el-collapse v-model="activeNames">

    <el-collapse-item>
      <template slot="title">
        Durable	耐用品，指可循环使用的工具，如光罩，光罩盒，晶舟<i class="header-icon el-icon-info"></i>
      </template>
    </el-collapse-item>

    <el-collapse-item >
      <template slot="title">
        Reticle List	光罩清单<i class="header-icon el-icon-info"></i>
      </template>
      <div>该功能模块用于查询查看Reticle的信息，并对Reticle进行查看详细信息，Eqp in，Eqp Out，查看操作历史等操作</div>
      <div>
        <el-steps direction="vertical">
          <el-step title="Detail Info" description="该操作用于查看Reticle的详细信息"></el-step>
          <el-step title="Eqp In" description="该操作指的是将光罩送进可支持耐用品的机台"></el-step>
          <el-step title="Eqp Out" description="该操作用于将Reticle从设备中取出"></el-step>
          <el-step title="Reticle History" description="该操作用于查看Reticle的操作历史"></el-step>
        </el-steps>
      </div>
    </el-collapse-item>

    <el-collapse-item >
      <template slot="title">
        Reticle Info	光罩信息<i class="header-icon el-icon-info"></i>
      </template>
      <div>该功能模块用于查看光罩详细信息并进行改变状态，查看操作历史等操作</div>
      <div>
        <el-steps direction="vertical">
          <el-step title="Xfer Status Change" description=""></el-step>
          <el-step title="Reticle History" description="该操作用于查看Reticle的操作历史"></el-step>
          <el-step title="Usage Count Reset" description=""></el-step>
          <el-step title="Durable Job Reserve" description=""></el-step>
          <el-step title="CDA" description=""></el-step>
          <el-step title="Equipment List" description=""></el-step>
        </el-steps>
      </div>
    </el-collapse-item>
    
    <el-collapse-item >
      <template slot="title">
        Carrier List	晶舟清单<i class="header-icon el-icon-info"></i>
      </template>
      <div>该功能模块用于查询查看Carrier的信息，并对Carrier进行查看详细信息，NPW Reserve，Status Change等操作</div>
      <div>
        <el-steps direction="vertical">
          <el-step title="Detail Info" description="该操作用于查看晶舟详细信息"></el-step>
          <el-step title="NPW Reserve" description="该操作用来预约NPW"></el-step>
          <el-step title="Status Change" description="该操作用于改变晶舟的状态"></el-step>
          <el-step title="Durable Start On PF" description=""></el-step>
          <el-step title="Durable Start Cancel" description=""></el-step>
          <el-step title="Sort Job Create" description=""></el-step>
        </el-steps>
      </div>
    </el-collapse-item>

    <el-collapse-item >
      <template slot="title">
        Carrier Information	晶舟信息<i class="header-icon el-icon-info"></i>
      </template>
      <div>该功能模块用于查看晶舟详细信息并进行改变状态，查看操作历史等操作</div>
      <div>
        <el-steps direction="vertical">
          <el-step title="Durable Hold" description="该操作用于对晶舟进行暂停操作"></el-step>
          <el-step title="Durable Skip" description="该操作用于将晶舟进行跳站的操作"></el-step>
          <el-step title="Durable Reserve" description="该操作用于改变晶舟的状态"></el-step>
          <el-step title="Durable Start On PF" description=""></el-step>
          <el-step title="Lot Info" description=""></el-step>
        </el-steps>
      </div>
    </el-collapse-item>
    
    <el-collapse-item >
      <template slot="title">
        Reticle Pod List	光罩盒清单<i class="header-icon el-icon-info"></i>
      </template>
    <div>该功能模块用于查询查看光罩信息，并做Eqp in，Eqp out，改变状态，查看操作历史等操作</div>
      <div>
        <el-steps direction="vertical">
          <el-step title="Detail Info" description="该操作用于查看光罩的详细信息"></el-step>
          <el-step title="Eqp In" description="该操作指的是将光罩盒送进可支持耐用品的机台"></el-step>
          <el-step title="Durable History" description="该操作用于查看Reticle Pod的操作历史"></el-step>
          <el-step title="Status Change" description="该操作用于改变光罩盒的状态"></el-step>
          <el-step title="Eqp Out" description=""></el-step>
        </el-steps>
      </div>
    </el-collapse-item>

        <el-collapse-item >
      <template slot="title">
        Reticle Pod Info	光罩盒信息<i class="header-icon el-icon-info"></i>
      </template>
      <div>该功能模块用于查看光罩盒详细信息并进行改变状态，查看操作历史等操作。</div>
         <div>
        <el-steps direction="vertical">
          <el-step title="Durable History" description="该操作用于查看Reticle Pod的操作历史"></el-step>
          <el-step title="Status Change" description="该操作用于改变光罩盒的状态"></el-step>
          <el-step title="PM Info Reset" description=""></el-step>
          <el-step title="Relation Change" description=""></el-step>
          <el-step title="Reticle Just Out" description=""></el-step>
          <el-step title="Reticle Information" description=""></el-step>
          <el-step title="CDA" description=""></el-step>
          <el-step title="Equipment List" description="该操作用于快速查看光罩所关联设备信息"></el-step>
        </el-steps>
      </div>
    </el-collapse-item>

    </el-collapse>  

  </el-tab-pane>
</el-tabs>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      }
    },
  created: function () {
  },

  methods: {

  }
}
</script>