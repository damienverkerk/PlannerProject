<template>
  <div class="flex mb-4 justify-center text-center">
    <div class="w-full overflow-hidden shadow-lg">
      <div class="px-6 py-4 text-center">
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        @click="timerSkip" v-if="state === 'p' || state ===  'r' || state === 's'"> Skip </button>
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
      time: {"work": {
        "minutes": 25, "seconds": 0, "inUse": false
      }, "rest": {
        "minutes" : 1, "seconds": 0, "inUse": false
      }
      },
      minutes: 0,
      seconds: 0
    };
  },
  created: function(){
    this.minutes = this.time.work.minutes
    this.seconds = this.time.work.seconds
    this.time.work.inUse = true;
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
          document.title = this.minutes + ":" + this.seconds + '- PlannerApp'
        } else {
          this.seconds = this.seconds - 1;
          document.title = this.minutes + ":" + this.seconds + '- PlannerApp'
        }
        if (this.minutes === 0 && this.seconds === 0) {
          this.adjustTime() 

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
      if(this.time.work.inUse){
        this.minutes = this.time.work.minutes
        this.seconds = this.time.work.seconds
      }else{
        this.minutes = this.time.rest.minutes
        this.seconds = this.time.rest.seconds
      }
      console.log("timer is reset");
    },
    timerSkip : function(){
      console.log("minutes: " + this.minutes)
      this.state = "s"
      this.timerOn = false
      clearInterval(this.interval);
        this.adjustTime()
    },

    adjustTime : function(){
      console.log(this.time.work.inUse + "  "+ this.time.rest.inUse)
      if(this.time.work.inUse === false){
        this.time.work.inUse = true
        this.time.rest.inUse = false
        this.minutes = this.time.work.minutes
        this.seconds = this.time.work.seconds
        console.log("werkstand")
      } else {
        this.time.work.inUse = false
        this.time.rest.inUse = true
        this.minutes = this.time.rest.minutes
        this.seconds = this.time.rest.seconds
        console.log("rest")
      }
      return
    },
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
