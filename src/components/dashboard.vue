<template>
  <div class="Dashboard">
    <div class="profile flex">
      <h5>Name : {{ userProfile.name }}</h5>
      <p>Work : {{ userProfile.title }}</p>
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
