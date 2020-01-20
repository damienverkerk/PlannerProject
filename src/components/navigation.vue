<template>
  <div class="navigation overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg rounded-t border-red-light w-full md:w-1/4">
    <ul>
      <li>
        <router-link to="dashboard" class="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">Dashboard</router-link>
      </li>
      <li>
        <router-link to="settings" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Settings</router-link>
      </li>
      <li>
        <a @click="logout" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4" href="#">Log Out</a>
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
