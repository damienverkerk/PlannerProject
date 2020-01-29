<template>
  <div class="navigation overflow-auto bg-gray-800 w-full md:w-1/6">
    <ul>
      <li>
        <router-link to="dashboard" class="block p-4 text-white font-bold  hover:text-blue-800 ">Dashboard</router-link>
      </li>
      <li>
        <router-link to="settings" class="block p-4 text-white  font-bold  hover:text-blue-800">Settings</router-link>
      </li>
      <li>
        <a @click="logout" class="block p-4 text-red-600  font-bold hover:text-blue-800 " href="#">Log Out</a>
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
