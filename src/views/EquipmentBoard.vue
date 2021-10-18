<template>
<div>
<el-tabs type="border-card">
  <el-tab-pane label="功能目的">在Equipment Board (设备看板)功能模块，你可以将需要的设备移动到看板，在看板便捷观察设备的状态</el-tab-pane>
  <el-tab-pane label="操作步骤">

    <el-collapse v-model="activeNames">
    <el-collapse-item>
      <template slot="title">
      Equipment Board<i class="header-icon el-icon-info"></i>
    </template>
      <div>点击“Equipment”下的“Equipment Board”菜单按钮，成功跳转到“Equipment Board”界面，</div>
      <div>在“Equipment Search”区域输入查询条件，点击“Search”按钮，查询符合条件的设备。</div>
    </el-collapse-item>
    <el-collapse-item>
            <template slot="title">
      设备信息<i class="header-icon el-icon-info"></i>
    </template>
      <div>界面左下角区域展示符合查询条件的设备信息，包括设备编码，工作区域编码，设备状态，</div>
      <div>工作区域群组，子状态信息，选中一条或多条设备，点击“Move to Board”按钮，将设备移动到看板当中。</div>
    </el-collapse-item>
    <el-collapse-item >
            <template slot="title">
      Equipment Board区域<i class="header-icon el-icon-info"></i>
    </template>
      <div>Equipment Board区域展示机台，根据状态用不同颜色标注，点击一个，可在Detail </div>
      <div>Information区域查看其详细信息。</div>
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