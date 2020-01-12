<template>
  <div class="navigation">
    <ul class="flex">
      <li class="mr-6">
        <router-link to="dashboard" class="text-blue-500 hover:text-blue-800">Dashboard</router-link>
      </li>
      <li class="mr-6">
        <router-link to="settings" class="text-blue-500 hover:text-blue-800">Settings</router-link>
      </li>
      <li class="mr-6">
        <a @click="logout" class="text-blue-500 hover:text-blue-800" href="#">Log Out</a>
      </li>
    </ul>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");

export default {
  name: "Navigation",
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
