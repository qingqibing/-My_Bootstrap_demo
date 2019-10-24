<template>
  <div>
    <oilModelDetial></oilModelDetial>
    <oilData></oilData>
    <timeBar></timeBar>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import oilModelDetial from "@/views/oilModelDetial/oilModelDetial.vue";
import oilData from "@/views/oilModelDetial/oilData.vue";
import timeBar from "@/views/timebar/DayCardV1/DayComp.vue";
// 组件引入
@Component({ components: { oilModelDetial, oilData, timeBar } })
export default class center_map extends Vue {
  mydata: any = null;
  mounted() {}
  get computedTest() {
    return null;
  }
}
</script>
<style scoped>
</style>
