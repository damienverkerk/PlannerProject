<template>
  <div class="add-project">
    <form @submit.prevent>
        <div class="md:flex md:items-center">

            <div class="md:w-3/4">
                <input v-model.trim="project.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="new Project" />
            </div>
            <div class="md:w-1/4">     
                <button @click="createProject" :disabled="project.content == ''" class="text-black py-3 px-4 rounded ml-2 hover:text-blue-500"><i class="fas fa-plus"></i></button>
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
