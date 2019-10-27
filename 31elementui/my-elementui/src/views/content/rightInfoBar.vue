<template>
  <div>
    <oilModelDetial :oilModelDetailData="oilModelDetailData"></oilModelDetial>
    <oilData :oilRealData="oilRealData"></oilData>
    <timeBar :step="step" :index="index" :startDate="startDate" :count="count"></timeBar>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import oilModelDetial from '@/views/oilModelDetial/oilModelDetial.vue';
import oilData from '@/views/oilModelDetial/oilData.vue';
// import timeBar from "@/views/timebar/DayCardV1/DayComp.vue";
import timeBar from '@/views/timebar/DayCardV2/DaysComp.vue';
import { OilRealDataMidModel, OilModelDetailMidModel } from '@/middelmodel/oil';
import { OilEquation } from '@/enum/Equation';
// 组件引入
@Component({ components: { oilModelDetial, oilData, timeBar } })
export default class RightInfoBar extends Vue {
  public mydata: any = null;
  public step: number = 3;
  public index: number = 3;
  public startDate: Date = new Date();
  public count: number = 12;
  public oilRealData: OilRealDataMidModel = new OilRealDataMidModel(
    5.6,
    120,
    7.5,
    65,
    new Date(),
    [120, 95],
  );
  public oilModelDetailData: OilModelDetailMidModel = new OilModelDetailMidModel(
    new Date(),
    [120, 95],
    5.2,
    215,
    120,
    120,
    72,
    81,
    OilEquation.RungeKutta,
  );
  public mounted() {}
  get computedTest() {
    return null;
  }
}
</script>
<style scoped>
</style>
