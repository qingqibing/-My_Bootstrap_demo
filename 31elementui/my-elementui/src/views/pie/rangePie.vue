<template>
  <div class="container">
    <div id="range_pie"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import echarts from 'echarts';
@Component({})
export default class RangePie extends Vue {
  mydata: any = null;
  chart: any = null;
  leftNum: number = 100;
  currentNum: number = 0;
  mounted () {

    this.initChart()
  }
  initChart () {
    let chartEle = document.getElementById('range_pie')
    this.chart = echarts.init(chartEle)
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['加载进度', '剩余进度']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: this.currentNum, name: '加载进度' },
            { value: this.RangePie, name: '剩余进度' }
          ]
        }
      ]
    };
    this.chart.setOption(option)
    this.timerReloadData()
  }
  // 定时更新数据
  timerReloadData (): void {
    let index = 0;
    let _that = this;
    let timer = setInterval(() => {
      index++;
      _that.leftNum = 100 - index * 10;
      _that.currentNum = index * 10
      if (_that.leftNum <= 0) {
        clearInterval(timer);
      }
    }, 2000)

  }
  @Watch('currentNum')
  onCurrentNum (val: number) {
    let option = {
      series: [
        {
          data: [
            { value: this.currentNum, name: '加载进度' },
            { value: this.leftNum, name: '剩余进度' }
          ]
        }
      ]
    };
    // 修改设置
    this.chart.setOption(option)
  }
  //   get computedTest () {
  //     return null;
  //   }
}
</script>
<style scoped>
#range_pie {
  width: 650px;
  height: 500px;
  background: rgb(202, 195, 195);
}
</style>