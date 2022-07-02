<template>
  <header class="header">
    <div class="navbar">
      <div class="navbar__logo">
        <img src="../assets/images/navbar/Logo.png" alt="" />
      </div>
      <div class="navbar__auth">
        <app-button class="navbar__login" :class="login">Log in</app-button>
        <app-button class="navbar__signin" :class="signin">Sign in</app-button>
      </div>
    </div>
  </header>
</template>

<script>
import AppButton from "./UI/AppButton.vue";
export default {
  name: "AppNavbar",
  components: { AppButton },
  data() {
    return {
      login: "login",
      signin: "signin",
      gradient: "gradient",
    };
  },
};
</script>

<style lang="scss">
.login {
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding: 5px 20px;
}
.signin {
  background-color: #cdcdcd;
  border-radius: 8px;
  padding: 5px 20px;
  color: #fff;
}
.gradient {
  background: linear-gradient(to right, #cdcdcd, #fff);
  border-radius: 8px;
  padding: 5px 20px;
}
</style>
