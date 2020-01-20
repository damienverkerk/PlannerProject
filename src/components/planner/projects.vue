<template>
<div class="projects flex w-full">
  <div class="max-w-sm rounded overflow-hidden shadow-lg w-1/2 " v-if="projects" v-for="project in projects" :key="project.id">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 ">{{project.name}}</div>
          <tasks  class="text-gray-700 text-base" :projectId="project.id"></tasks>
        </div>
  </div>
  <div v-if="projects == 0 " class="max-w-sm w-1/2">
  <p> No Projects yet</p>
  </div>
</div>
</template>

<script>
import Tasks from "./tasks"
import { mapState } from 'vuex'
export default {
  name: "Projects",
  components: {
      Tasks
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
      ...mapState(['projects'])
  }
};
</script>

<style>
</style>
