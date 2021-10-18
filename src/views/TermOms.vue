<template>
<div id="oms">
  <el-input placeholder="请输入内容"  v-model="searchValue" class="input-with-select" style="margin-bottom: 15px;">
    <el-button slot="append" @click="search"  icon="el-icon-search"></el-button>
  </el-input>
  <el-table id="omsTableData" :data="tableDateTemp"  border style="width: 100%" :height="height">
  <el-table-column prop="module" label="模块" width="180"> </el-table-column>
  <el-table-column
      prop="tag"
      label="功能"
      width="160"
      :filters="filtersData"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag :type="'primary'" disable-transitions>{{scope.row.function}}</el-tag>
      </template>
    </el-table-column>
  <el-table-column prop="term" label="术语"> </el-table-column>
  <el-table-column prop="chineseTerm" label="中文术语"> </el-table-column>
  <el-table-column prop="description" label="描述"> </el-table-column>
  <el-table-column prop="remarks" label="备注"> </el-table-column>

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
        filtersData:[]
      }
    },
  created: function () {
    this.getOms()
    this.getFilters()
    
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
      let el = document.querySelector("#oms")
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
    getOms: function () {
      let url = 'http://localhost:8028/api/bean/getOmsJsonView'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.tableData = response.data
          this.tableDateTemp = this.tableData
        }
      })
    },
    getFilters: function () {
      let url = 'http://localhost:8028/api/bean/getOmsFilters'
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.filtersData=response.data
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
    },
    filterTag(value, row) {
      return row.function === value
    },
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
