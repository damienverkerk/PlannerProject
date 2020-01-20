<template>
<div class="add">
  <div>
    <button @click= "buttonClicked" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    v-if="!showForm">New Plan</button>
  </div>
  <div class="showform" v-if="showForm">
    <form class="w-full max-w-lg">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
      <label class="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="grid-plan">Plan: </label>
    </div>
    <div class="md:w-2/3">
    <input v-model.trim="task.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-plan" type="text" placeholder="My Plan">
    </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
      <label class="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Categorie
      </label>
      </div>
      <div class="md:w-2/3 inline-block relative w-64">
      <select  v-model="selectedProject" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option v-for="project in projects" v-bind:value="project.id">{{project.name}}</option>
        </select>
        </div>

      </div>
</form>
    <button @click= "addPlan" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Plan</button>
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
      showForm: false,
      task: {
            name: ''
        },
        selectedProject : ''
    };
  },
  methods: {
    buttonClicked : function() {
      this.showForm = true
      console.log("button clicked")
    },
    addPlan : function() {
      console.log("addPlan")
       console.log(this.selectedProject)

          fb.tasksCollection.add({
              createdOn: new Date(),
              projectId: this.selectedProject,
              name: this.task.name,
          }).then(ref => {
              this.task.name = ''
          }).catch(err => {
              console.log(err)
          })
    }
  },
  computed: {
    
      ...mapState(['projects','userProfile', 'currentUser'])
  }
};
</script>

<style>
</style>
