<template>
  <header class="header">
    <div class="navbar">
      <router-link to="/home" class="navbar__logo">
        <img src="../assets/images/navbar/Logo.png" alt="" />
      </router-link>
      <div class="navbar__auth">
        <router-link to="/login">
          <app-button :style="'login'">Log in</app-button>
        </router-link>
        
        <router-link to="/signup">
          <app-button :style="'signin'">Sign in</app-button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import AppButton from "./UI/AppButton.vue";
export default {
  name: "AppNavbar",
  components: { AppButton },
};
</script>

<style lang="scss">

</style>
