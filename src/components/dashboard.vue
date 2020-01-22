<template>
  <div class="Dashboard">
    <div class="profile flex content-start flex-wrap bg-gray-200">
      <div class="w-1/3 p-2"></div>
      <div class="w-2/3 p-2"></div>
      <div class="w-3/3 p-2">
      <div class="text-gray-700 text-center bg-gray-400 p-2">{{ userProfile.name }}</div>
      </div>
    </div>
    <pomodoro></pomodoro>
    <planner></planner>
  </div>
</template>

<script>
import { mapState } from "vuex";
const fb = require("../firebaseConfig.js");

import Pomodoro from "./pomodoro/pomodoro";
import Planner from "./planner/planner";
export default {
  name: "Dashboard",
  components: { Pomodoro, Planner },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["userProfile"])
  }
};
</script>

<style></style>
