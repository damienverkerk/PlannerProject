<template>
  <div class="flex mb-4">
    <div class="w-full overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Pomodoro</div>
        <span class="text-2xl">{{ minutes | doubleDigits }} {{ seconds | doubleDigits }}</span>
      </div>
      <div class="px-6 py-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="timerStart"
          v-if="state === 's' || state === 'p'"
        >Play</button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="timerPause"
          v-if="state === 'r'"
        >Pause</button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="timerReset"
          v-if="state === 'p' || state === 'r'"
        >Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pomodoro",
  data: function() {
    return {
      timerOn: false,
      interval: null,
      state: "s",
      seconds: 0,
      minutes: 25
    };
  },
  methods: {
    timerStart: function() {
      this.state = "r";
      this.timerOn = true;
      console.log("timer is on");
      this.interval = setInterval(() => {
        if (this.seconds === 0) {
          this.seconds = 59;
          this.minutes = this.minutes - 1;
        } else {
          this.seconds = this.seconds - 1;
        }
        if (this.minutes === 0 && this.seconds === 0) {
          this.timerReset;
        }
      }, 1000);
    },
    timerPause: function() {
      this.state = "p";
      this.timerOn = false;
      clearInterval(this.interval);
      console.log("timer is paused");
    },
    timerReset: function() {
      this.state = "s";
      this.timerOn = false;
      clearInterval(this.interval);
      this.minutes = 25;
      this.seconds = 0;
      console.log("timer is reset");
    }
  },
  filters: {
    doubleDigits: function(num) {
      if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    }
  }
};
</script>

<style>
</style>
