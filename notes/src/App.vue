<template>

  <AppNavbar />
  <router-view></router-view>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
export default {
  components: { AppNavbar },
  mounted(){
    const auth = {
      isAuth : false,
    }
    localStorage.setItem("auth",JSON.stringify(auth))
  }
};

</script>
