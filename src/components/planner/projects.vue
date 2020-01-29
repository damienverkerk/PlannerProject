<template>
<div class="projects flex w-full items-center content-center">
  <div class="max-w-sm rounded overflow-hidden shadow-lg w-1/4 border">
  <div class="px-6 py-3">
    <add-project></add-project>
  </div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg w-3/4 border" v-if="projects" v-for="project in projects" :key="project.id">
          <div class="font-bold text-xl px-6 py-5"><input 
      class="leading-tight mr-4" 
      type="checkbox" v-model="checked" 
      @change="onCheck(project.id)"
      :value="project.name"
      />{{project.name}}</div>
          <tasks  class="text-gray-700 text-base" :projectId="project.id"></tasks>
  </div>
</div>
</template>

<script>
import Tasks from "./tasks"
import { mapState } from 'vuex'
import AddProject from "./addProject";
const fb = require("../../firebaseConfig")
export default {
  name: "Projects",
  components: {
      Tasks,
      AddProject
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
