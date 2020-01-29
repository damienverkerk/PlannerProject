<template>
  <div class="tasks">
    <ul  v-if="tasksArray" class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
    <li v-for="task in getTasksByProjectId(projectId)" >
      <input 
      class="mr-2 leading-tight" 
      type="checkbox" v-model="checked" 
      @change="onCheck(task.id)"
      :value="task.name"
      >
      {{ task.name}}</li>
    </ul>
    <ul v-if="tasksArray == 0" class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
      <li>
      <add-task :projectId = projectId></add-task>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddTask from './addTask'
const fb = require('../../firebaseConfig.js')
export default {
  name: "Tasks",
  components: {
    AddTask
  },
  data: function() {
    return {
      checked: false,
        tasksArray : [],
        tasksQuery : false
    };
  },
  methods: {
    onCheck: function(completedTask) {
      console.log(this.checked , completedTask)
      fb.tasksCollection.doc(completedTask).delete().then(function(){
        console.log(completedTask + " is deleted")
      }).catch(function(error){
        console.log("Error removing document: " , error)
      })
      
    }
  },
  computed: {
     getTasksByProjectId () {
       return this.$store.getters.getTasksByProjectId
     }
  },
  props: ['projectId']

}
</script>

<style>
</style>