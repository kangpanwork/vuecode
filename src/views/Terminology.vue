<template>
<div id="term">
  <el-input placeholder="请输入内容"  v-model="searchValue" class="input-with-select" style="margin-bottom: 15px;">
    <el-button slot="append" @click="search"  icon="el-icon-search"></el-button>
  </el-input>
  <el-table id="termTableData" :data="tableDateTemp"  border style="width: 100%" :height="height">
  <el-table-column prop="module" label="缩写" width="180"> </el-table-column>
  <el-table-column prop="term" label="英文全名"> </el-table-column>
  <el-table-column prop="chineseTerm" label="中文含义"> </el-table-column>
  <el-table-column prop="description" label="描述"> </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        searchValue:'',
        tableData: [],
        tableDateTemp:[],
        height: "300px",
      }
    },
  created: function () {
    this.getTerminology()
  },
    mounted() {
    this.getAutoHeight();
    const self = this;
    window.onresize = function() {
      self.getAutoHeight();
    };
  },
  methods: {
    // 自适应高度
     getAutoHeight() {
      let el = document.querySelector("#term")
      if (el) {
        let elParent = el.parentNode
        let pt = this.getStyle(elParent, "paddingTop")
        let pb = this.getStyle(elParent, "paddingBottom")
        this.$nextTick(() => {
          this.height = elParent.clientHeight - (pt + pb) + "px";
        });
      }
    },
    getStyle(obj, attr) {
      // 兼容IE浏览器
      let result = obj.currentStyle
        ? obj.currentStyle[attr].replace("px", "")
        : document.defaultView
            .getComputedStyle(obj, null)[attr].replace("px", "");
      return Number(result);
    },
    getTerminology: function () {
      let url = 'http://localhost:8028/api/bean/getTerminology'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.tableData = response.data
          this.tableDateTemp = this.tableData
        }
      })
    },
    search() {
      let list = this.tableData.filter((ele) => {
        let keys = Object.keys(ele)
        return keys.some((key) => {
          if (key !== 'index') {
            return ele[key].toLowerCase().includes(this.searchValue.toLowerCase().trim());
          }
        });
      });
      this.tableDateTemp = list
    }
  }
}
</script>
<style>
.layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-main {
  overflow: hidden !important;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
