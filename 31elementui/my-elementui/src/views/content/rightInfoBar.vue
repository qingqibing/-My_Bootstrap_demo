<template>
  <div>
    <oilModelDetial></oilModelDetial>
    <oilData></oilData>
    <timeBar :step="step" :index="index" :startDate="startDate" :count="count"></timeBar>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import oilModelDetial from "@/views/oilModelDetial/oilModelDetial.vue";
import oilData from "@/views/oilModelDetial/oilData.vue";
// import timeBar from "@/views/timebar/DayCardV1/DayComp.vue";
import timeBar from "@/views/timebar/DayCardV2/DaysComp";
// 组件引入
@Component({ components: { oilModelDetial, oilData, timeBar } })
export default class center_map extends Vue {
  mydata: any = null;
  step: number = 3;
  index: number = 3;
  startDate: Date = new Date();
  count: number = 12;
  mounted() {}
  get computedTest() {
    return null;
  }
}
</script>
<style scoped>
</style>
