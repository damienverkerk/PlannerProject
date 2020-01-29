<template>
  <div id="app" class="flex">
    <Navigation v-if="currentUser && navToggle"></Navigation>
    <button @click="hideNav" class="h-12  text-black font-bold py-2 px-4"><i class="fas fa-arrow-right"></i></button>
    <router-view class="flex-1" />
  </div>
</template>

<script>
import Navigation from "./components/navigation";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Navigation },
  data: function (){
    return{ 
      navToggle: true
    }
  },
  methods:{
    hideNav : function(){
      console.log(this.navToggle)
      if(this.navToggle == true){
      this.navToggle = false
      console.log("navtoggle true naar false")
      }
      else { this.navToggle = true}
    }
  },
  computed: {
    ...mapState(["currentUser"])
  }
}
</script>

<style></style>
