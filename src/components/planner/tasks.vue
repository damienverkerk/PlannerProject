<template>
  <div  v-if="tasksArray">
    <ul class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
    <li v-for="task in getTasksByProjectId(projectId)" >
      <input 
      class="mr-2 leading-tight" 
      type="checkbox" v-model="checked" 
      @change="onCheck(task.id)"
      :value="task.name"
      >
      {{ task.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')
export default {
  name: "Tasks",
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