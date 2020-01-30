<template>
  <div class="container">
    <div id="range_pie"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import echarts from 'echarts';
@Component({})
export default class CustomPie extends Vue {
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
      backgroundColor: '#1a6865',

      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '读取进度',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 0, name: '加载进度' },
            { value: 100, name: '剩余进度' },
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#17a2b8',
            shadowBlur: 200,
            shadowColor: '#17a2b8'
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
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