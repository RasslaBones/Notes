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
};
</script>
