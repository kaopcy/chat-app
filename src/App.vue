<template>
  <Navbar/>
  <div class="app">
  </div>
  <router-view ></router-view>
</template>

<script>
import { watch , onMounted , } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import store from './store'

export default {
  name: 'App',
  components:{ Navbar },

  setup( ) {
    const route = useRoute()
    const $store = store
    watch( route , ()=>{
      console.log( $store.getters.mobile );
    } )
    
    const checkWindowSize = ()=>{ 
      if(window.innerWidth < 680) $store.commit('setMobile' , true)
      else $store.commit('setMobile' , false)
    }
    onMounted(() => {
      checkWindowSize()
      window.addEventListener('resize' , ()=> { 
        checkWindowSize()
      })  
    })

    

    return {  }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,200');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: #191919;
}
</style>
