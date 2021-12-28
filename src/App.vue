<template>
  <div id="app">
    <!--homepagina-->
    <Homepage 
      v-if="page == 'home'"

      @change-page="goToPage"
    />
    <!-- Game -->
    <Gamepage 
      v-if="page == 'game'"

      @change-page="goToPage"
    />

    <Rankingpage
      v-if="page == 'ranking'"

      @change-page="goToPage"
    />

    <Leaderboard
      v-if="page == 'Leaderboard'"

      @change-page="goToPage"
    />

  </div>
</template>

<script>

// Pages
import Homepage from "./pages/Homepage.vue"
import Gamepage from "./pages/Gamepage.vue"
import Rankingpage from "./pages/Rankingpage.vue"
import Leaderboard from "./pages/Leaderboard.vue"

// components
import Googlechart from "./components/Googlechart.vue"

// App Component
export default {
  name: 'App',
  components:{
    Homepage,
    Gamepage,
    Rankingpage,
    Leaderboard,
    Googlechart
  }, 

  data (){
  return { 
    page:"home"
  }
},
methods: {
goToPage(page){
  this.page = page;
  }
}
}
</script>
<style lang="scss">
  @import "./src/scss/style.scss";
</style>
