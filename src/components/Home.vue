<template>
<div>
  <el-container>
    <el-aside width="400px">
      <!-- background-color="#001B74" -->
      <!-- text-color="#333" -->
      <el-menu background-color="#04154B" :default-openeds="defaultOpeneds" :collapse="false" :default-active="$router.path" text-color="#FFFFFF" router>
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-s-comment"></i>
            <span>术语</span>
          </template>
          <el-menu-item index="/termMds"> Manufacturing Definition Services 制造数据定义服务 </el-menu-item>
          <el-menu-item index="/termOms"> Operation Manager Services 制造过程管理服务 </el-menu-item>
          <el-menu-item index="/terminology"> 专业词汇 </el-menu-item>
        </el-submenu>
        <el-menu-item index="/lotBatchManagement"> 
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Lot（批次管理）</span>
          </template> </el-menu-item>
        <el-menu-item index="/bank"> 
           <template slot="title">
            <i class="el-icon-truck"></i>
            <span>Bank（储存仓管理模块）</span>
          </template> 
         </el-menu-item>
        <el-menu-item index="/bay"> 
           <template slot="title">
            <i class="el-icon-location"></i>
            <span>工作区域（Bay）</span>
          </template> 
         </el-menu-item>
        <el-menu-item index="/lotStart"> 
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Lot Start（批次开始）</span>
          </template> 
         </el-menu-item>
        <el-submenu index="3" >
          <template slot="title">
            <i class="el-icon-cpu"></i>
            <span>Equipment（设备管理）</span>
          </template>
          <el-menu-item index="/equipment"> 设备模块 </el-menu-item>
          <el-menu-item index="/dmsEquipment"> Durable维护设备模块 </el-menu-item>
          <el-menu-item index="/equipmentBoard"> 设备看板模块 </el-menu-item>
        </el-submenu>
        <el-menu-item index="/durable"> 
            <template slot="title">
            <i class="el-icon-refresh"></i>
            <span>Durable(耐用品管理)</span>
          </template> 
         </el-menu-item>
        <el-menu-item index="/lotList"> 
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>Lot List(Lot清单)</span>
          </template> 
         </el-menu-item>
        <el-menu-item index="/constraint"> 
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>Constraint List</span>
          </template> 
         </el-menu-item>
          <el-submenu index="3" >
          <template slot="title">
            <i class="el-icon-loading"></i>
            <span>process</span>
          </template>
          <el-menu-item index="/processHoldRegistration"> Process Hold Registration </el-menu-item>
          <el-menu-item index="/processHoldList"> Process Hold List </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</div>
</template>

<script>
  export default {
    data() {
      return {
        // 默认展开
        defaultOpeneds: ["1"],
      }
    }
}
</script>