<template>
  <header class="header">

    <div class="navbar">
      <router-link to="/" class="navbar__logo">
        <img src="../assets/images/navbar/Logo.png" alt="" />
      </router-link>
      <div class="navbar__auth" v-if="!isAuth">
        <router-link to="/login">
          <app-button :style="'login'">Log in</app-button>
        </router-link>
        
        <router-link to="/signup">
          <app-button :style="'signin'">Sign in</app-button>
        </router-link>
      </div>
      <div class="navbar__auth" v-else>
        <router-link to="/login" @click="logOut">
          Log Out
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import AppButton from "./UI/AppButton.vue";
export default {
  name: "AppNavbar",
  computed:{
    ...mapState(["isAuth"]),
  },
  methods:{
    logOut(){
      this.$store.commit("logOut")
    }
  },
  components: { AppButton },
};
</script>

<style lang="scss"></style>
