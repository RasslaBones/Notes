<template>
  <AppNavbar />
  
  <div class="app__container">
    <router-view></router-view>
  </div>
  
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
export default {
  components: { AppNavbar },
  mounted(){
    const auth = {
      isAuth : true,
    }
    localStorage.setItem("auth",JSON.stringify(auth))
  }
};
</script>
