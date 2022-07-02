<template>

  <AppNavbar />
  
  <router-view to="login">

  </router-view>
  
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
export default {
  components: { AppNavbar },
};

</script>
