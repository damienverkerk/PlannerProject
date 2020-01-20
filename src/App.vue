<template>
  <div id="app" class="flex">
    <Navigation v-if="currentUser"></Navigation>
    <router-view class="flex-1" />
  </div>
</template>

<script>
import Navigation from "./components/navigation";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Navigation },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style></style>
