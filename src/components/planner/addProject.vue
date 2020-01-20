<template>
  <div class="add-project">
    <form @submit.prevent class="w-full max-w-lg">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label  class="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Project</label>
            </div>
            <div class="md:w-2/3">
                <input v-model.trim="project.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="new Project" />
            </div>
            <div class="md:w-3/3">     
                <button @click="createProject" :disabled="project.content == ''" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">post</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')

export default {
  name: "AddProject",
  data: function() {
    return {
        project: {
            name: ''
        }
    }
  },
  methods: {
      createProject: function() {
          fb.projectsCollection.add({
              createdOn: new Date(),
              name: this.project.name,
              userId: this.currentUser.uid
          }).then(ref => {
              console.log(this.project.name + " added to projects")
              this.project.name = ''
          }).catch(err => {
              console.log(err)
          })
          }
  },
  computed: {
      ...mapState(['userProfile', 'currentUser'])
  }
};
</script>

<style>
</style>
