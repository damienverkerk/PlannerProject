<template>
  <div  v-if="tasksArray">
    <ul class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
    <li  v-for="task in tasksArray" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
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
    tasksByProject(){
      console.log(this.projectId)
      this.tasksArray = []
      if(this.projectId) {
       var tasksQuery = fb.tasksCollection.where('projectId', '==', this.projectId).get();
       if(tasksQuery) {
            tasksQuery.then(querySnapshot => {
              querySnapshot.forEach((doc) => {
                        let task = doc.data()
                        task.id = doc.id
                        if (task){
                        this.tasksArray.push(task);
                        } else {
                          console.log('no more tasks')
                        }
            }) }) 
                    console.log('taskArray = ' + this.tasksArray)
                    console.log(this.tasksArray[1].name)
                    if(this.tasksArray) {
                      return this.tasksArray
                    }else{
                      console.log("else")
                    }
      }else{
        this.tasksArray = ['no task']
        console.log("No tasks for projectId")}
    }else{
        console.log('No ProjectId')
    }
    }
  },
  props: ['projectId'],
  created: function() {
    if(this.projectId){
      this.tasksByProject();
    }
} 
}
</script>

<style>
</style>