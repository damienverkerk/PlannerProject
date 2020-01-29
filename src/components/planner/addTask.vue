<template>
<div class="add">
  <div class="showform">
    <form class="w-full max-w-lg" @submit.prevent>
      <div class="md:flex md:items-center mb-3">
        <div class="md:w-2/3">
          <input v-model.trim="task.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-plan" type="text" placeholder="My Plan">
        </div>
        <div class="md:w-1/3">
        <button  @click="addPlan" class="text-black py-3 px-4 rounded ml-2 hover:text-blue-500"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')
export default {
  name: "AddTask",
  data: function() {
    return {
      task: {
            name: ''
        },
        selectedProject : ''
    };
  },
  methods: {
    addPlan : function() {
      console.log("addPlan")
       console.log(this.selectedProject)

          fb.tasksCollection.add({
              createdOn: new Date(),
              projectId: this.projectId,
              name: this.task.name,
          }).then(ref => {
              this.task.name = ''

          }).catch(err => {
              console.log(err)
          })
    }
  },
  props: ['projectId'],
  computed: {
    
      ...mapState(['projects','userProfile', 'currentUser'])
  }
};
</script>

<style>
</style>
