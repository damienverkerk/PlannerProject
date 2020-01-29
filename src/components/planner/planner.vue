<template>
  <div class="planner">
    <div class="flex w-full">
      <projects></projects>
  </div>
  </div>
</template>

<script>
import AddTask from "./addTask";
import Projects from "./projects"
import { mapState } from 'vuex'

const fb = require('../../firebaseConfig.js')

export default {
  name: "Planner",
  components: {
    AddTask,
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
