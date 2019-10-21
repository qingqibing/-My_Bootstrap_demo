<template>
  <div id="my_content">
    <h1>Select</h1>
    <!-- 布局的方式1： -->
    <div class="show">
      <div class="row">
        <span>显示模式</span>
        <el-select v-model="valueShowTypes" placeholder="请选择">
          <el-option
            v-for="item in optionsShowTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="row">
        <span>权重</span>
        <el-select v-model="valueFactors" placeholder="请选择">
          <el-option
            v-for="item in optionsFactors"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <!-- 布局的方式2: -->
    <!-- <el-row :span="4">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>-->
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class viewSelect extends Vue {
  mydata: any = null;
  optionsFactors = [];
  valueFactors = "";
  optionsShowTypes = [];
  valueShowTypes = "";
  mounted() {
    console.log("select 加载成功");
    this.optionsFactors = [
      {
        value: "thickness",
        label: "油膜厚度"
      },
      {
        value: "mass",
        label: "油膜质量"
      }
    ];
    this.optionsShowTypes = [
      {
        value: "scatter",
        label: "散点"
      },
      {
        value: "heatmap",
        label: "热图"
      }
    ];
  }
  get computedTest() {
    return null;
  }
}
</script>
<style scoped>
#my_content {
  display: flex;
  flex-direction: column;
}
#my_content .show {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  width: 30%;
  background: #99a9bf;
}
.row {
  background: #d3dce6;
  /* margin-bottom: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
}
.el-select {
  width: 60%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>