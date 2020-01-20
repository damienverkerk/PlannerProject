<template>
  <div class="planner">
    <add-project class="flex w-full"></add-project>
    <div class="flex mb-4 px-2">
      <add-task class="flex w-full"></add-task>
    </div>
    <div class="flex w-full">
      <projects></projects>
  </div>
  </div>
</template>

<script>
import AddProject from "./addProject";
import AddTask from "./addTask";
import Projects from "./projects"
import { mapState } from 'vuex'

const fb = require('../../firebaseConfig.js')

export default {
  name: "Planner",
  components: {
    AddTask,
    AddProject,
    Projects
  },
  data: function() {
    return {
      tasksArray : []
    };
  },
  computed: {
    project: function (){
      console.log("computed project")
    },
    ...mapState(['projects', 'tasks']),


  },
  methods: {
    tasksByProject(projectId){
      console.log(projectId)
      if(projectId) {
        this.tasksArray = []
       var tasksQuery = fb.tasksCollection.where('projectId', '==', projectId);
      tasksQuery.onSnapshot(function(querySnapshot) {
        let tasksArray = []
        querySnapshot.forEach(function(doc){
          tasksArray.push(doc.data().name);
        })
        console.log("current tasks by projectid: " , tasksArray.join(", ") , "for project id : " , projectId)
        this.tasksArray = tasksArray
      })
      }else{console.log("no projectId")}
    return }

  }
};
</script>

<style>
</style>
