<template>
  <div>
    <div class="title">
      <!-- step:
      <input type="text" v-model="step" />
      index:
      <input type="text" v-model="index" />-->
      <!-- <button v-on:click="render">刷新</button> -->
    </div>

    <div class="days">
      <div class="dayContainer" v-for="(day,idx) in days" v-bind:key="idx">
        <Day v-bind:step="day.step" v-bind:index="day.index" v-bind:title="day.title"></Day>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Day from "./DayComp";
export default {
  data() {
    return {
      // startDate: new Date(),
      // step: 1,
      // count: 20,
      // index: 5,
      days: []
    };
  },
  props: ["step", "index", "startDate", "count"],

  watch: {
    step() {
      this.renderDays(this.step, this.index, this.count, this.startDate);
    },
    index() {
      this.renderDays(this.step, this.index, this.count, this.startDate);
    }
  },
  methods: {
    renderDays(step, index, count, startDate) {
      //有一个一共生成多少个块,和当前是第几块
      // let index = this.index,
      //   count = this.count,
      //   step = this.step;
      if (index > count) {
        var temp = index;
        index = count;
        count = index;
      }
      let newDays = [];
      let howManyIndexADay = Math.ceil(24 / step);
      let howManyDayCards = Math.ceil((count * step) / 24);
      for (let i = 0; i < howManyDayCards; i++) {
        let currentDayIndex = 0;
        if (
          i * howManyIndexADay < index &&
          (i + 1) * howManyIndexADay > index
        ) {
          currentDayIndex = index % howManyIndexADay;
        } else if (i * howManyIndexADay < index) {
          currentDayIndex = howManyIndexADay;
        } else {
          currentDayIndex = 0;
        }
        newDays.push({
          title: this.getDate(i),
          step: Number(this.step),
          index: currentDayIndex
        });
      }
      this.days = newDays;
    },
    getDate(n) {
      console.log("renderDate:", this.startDate, n);
      let date = new Date(this.startDate);
      date.setDate(date.getDate() + n);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
  },
  mounted() {
    this.renderDays();
  },
  components: {
    Day
  }
};
</script>
<style scoped>
.days {
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 22.7em;
  border-radius: 5px;
}
</style>
