<template>
  <header class="header">
    <div class="navbar">
      <div class="navbar__logo">
        <img src="../assets/images/navbar/Logo.png" alt="" />
      </div>
      <div class="navbar__auth">
        <app-button class="navbar__login">Log in</app-button>
        <app-button class="navbar__signin">Sign in</app-button>
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
.navbar {
  &__login {
    border: 3px solid #cdcdcd;
    border-radius: 8px;
    padding: 5px 20px;
  }
  &__signin {
    background-color: #cdcdcd;
    border-radius: 8px;
    padding: 5px 20px;
    color: #fff;
  }
}
</style>
