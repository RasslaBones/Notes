<template>
  <header class="header">
    <div class="navbar">
      <div class="navbar__logo">
        <img src="../assets/images/navbar/Logo.png" alt="" />
      </div>
      <div class="navbar__auth">
        <app-button :style="'login'">Log in</app-button>
        <app-button :style="'signin'">Sign in</app-button>
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
