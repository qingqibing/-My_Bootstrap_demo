<template>
  <div>
    <div class="title">
      <!-- step:
      <input type="text" v-model="step" />
      index:
      <input type="text" v-model="index" />-->
      <button v-on:click="render">刷新</button>
    </div>

    <div class="days">
      <div class="dayContainer" v-for="(day,index) in days" v-bind:key="index">
        <Day v-bind:daynum="day.dayNum" v-bind:hours="day.hours"></Day>
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
      days: [
        {
          dayNum: 1,
          hours: 24
        },
        {
          dayNum: 2,
          hours: 24
        },
        {
          dayNum: 3,
          hours: 6
        }
      ],
      //   step: 3,
      startHour: 0,
      endHour: 25
      //   index: 5
    };
  },
  props: ["step", "index"],
  watch: {
    step() {
      this.renderDays(this.step, this.index);
    },
    index() {
      this.renderDays(this.step, this.index);
    }
  },
  methods: {
    renderDays(step, index) {
      let totalHours = step * index;
      let days = Math.floor(totalHours / 24);
      let hours = totalHours % 24;
      let newDays = [];

      for (let i = 0; i < days; i++) {
        newDays.push({
          dayNum: i + 1,
          hours: 24
        });
      }
      newDays.push({
        dayNum: days + 1,
        hours: hours
      });

      this.days = newDays;
    },
    render() {
      this.renderDays(this.step, this.index);
    }
  },
  mounted() {
    this.renderDays(this.step, this.index);
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
