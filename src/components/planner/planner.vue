<template>
  <div class="planner">
    <div class="flex mb-4 px-2">
      <add-task class="flex w-full"></add-task>
    </div>
    <div class="flex mb-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Project</div>
          <p class="text-gray-700 text-base">all tasks for project</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from "./addTask";

export default {
  name: "Planner",
  components: {
    AddTask
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
