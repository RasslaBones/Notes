<template>
  <div class="signup signup__wrapper">
    <div class="signup__hero">
      <div class="signup__image">
        <img src="@/assets/images/login-image.png" alt="Error" />
      </div>
      <div class="signup__title">Lorem ipsun dolor sit amet quast</div>
      <div class="signup__text">Lorem ipsum</div>
    </div>
    <div class="signup__inputs">
      <div class="signup__input">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Email..." />
      </div>

      <div class="signup__input">
        <label for="Password">Password</label>
        <div class="signup__password" v-if="!visibility">
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Password..."
          />
          <img
            src="@/assets/icons/visibilityON.svg"
            alt="Error"
            @click="this.visibility = !this.visibility"
          />
        </div>
        <div class="signup__password" v-else>
          <input
            v-model="password"
            type="text"
            id="password"
            placeholder="Password..."
          />
          <img
            src="@/assets/icons/visibilityOFF.svg"
            alt="Error"
            @click="this.visibility = !this.visibility"
          />
        </div>
        <div class="signup__signup">Must have 8 or more symbols</div>
        <div class="signup__signup">Must have 1 or more digits</div>
      </div>

      <div class="signup__input">
        <label for="confirm">Confirm Password</label>
        <div class="signup__password" v-if="!visibility">
          <input
            v-model="confirmPassword"
            type="password"
            id="confirm"
            placeholder="Password..."
          />
          <img
            src="@/assets/icons/visibilityON.svg"
            alt="Error"
            @click="this.visibility = !this.visibility"
          />
        </div>
        <div class="signup__password" v-else>
          <input
            v-model="confirmPassword"
            type="text"
            id="confirm"
            placeholder="Password..."
          />
          <img
            src="@/assets/icons/visibilityOFF.svg"
            alt="Error"
            @click="this.visibility = !this.visibility"
          />
        </div>
      </div>
      
      <app-button
        class="signup__enter wide-button"
        :style="'gradient'"
        v-if="formIsValid == true"
      >
        <router-link to="/login">Sign Up</router-link>
      </app-button>
      <div v-else class="signup__error">
        <small v-if="error">{{ error }}</small>
        <app-button class="signup__enter wide-button" :style="'gradient'" >
        Sign Up
      </app-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
export default {
  data() {
    return {
      visibility: false,
      password: "",
      confirmPassword: "",
      email: "",
      error: "",
    };
  },
  components: {
    AppButton,
  },
  computed:{
    formIsValid() {
      var numbers = /[0-9]/g;

      if (this.password.length > 0) {
        if (this.password !== this.confirmPassword) {
          this.error = "Passwords didn't match!";
          return false;
        }
        else if (this.password.length < 8) {
          this.error = "Password must have at least  8 symbols";
          return false;
        }

        else if (!this.password.match(numbers)) {
          this.error = "Password must contain at least 1 number";
          return false;
        }

        else{
            this.error = ''
            this.$store.dispatch("registerUser", {
            email: this.email,
            password: this.password,
          });
            return true
        }
      }
      else{
        this.error = "Enter a password."
        return false
      }
    },
  },
};
</script>
