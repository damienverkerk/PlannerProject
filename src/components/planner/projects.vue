<template>
<div class="projects flex w-full">
  <div class="max-w-sm rounded overflow-hidden shadow-lg w-1/2 " v-if="projects" v-for="project in projects" :key="project.id">
        <div class="px-6 py-4">
          <input 
      class="mr-2 leading-tight" 
      type="checkbox" v-model="checked" 
      @change="onCheck(project.id)"
      :value="project.name"
      >
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
const fb = require("../../firebaseConfig")
export default {
  name: "Projects",
  components: {
      Tasks
  },
  data: function() {
    return {
      checked: false,
    };
  },
  methods: {
    onCheck: function(completedProject) {
      console.log(this.checked , completedProject)
      fb.projectsCollection.doc(completedProject).delete().then(function(){
        console.log(completedProject + " is deleted")
      }).catch(function(error){
        console.log("Error removing document: " , error)
      })
      this.checked = false;
      
    }},
  computed: {
      ...mapState(['projects'])
  }
};
</script>

<style>
</style>
