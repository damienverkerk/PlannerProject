<template>
  <div  v-if="tasksArray">
    <ul class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
    <li v-for="task in getTasksByProjectId(projectId)" >{{ task.name}}</li>
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
        tasksArray : [],
        tasksQuery : false
    };
  },
  methods: {
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