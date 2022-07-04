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
      <small v-if="error">{{ error }}</small>
      <app-button
        class="signup__enter wide-button"
        :style="'gradient'"
        @click="formIsValid"
      >
        <router-link to="/login" v-if="formIsValid == true">Sign Up</router-link>
      </app-button>
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
  methods: {
    formIsValid() {
      var numbers = /[0-9]/g;
      var isValid = false
      if (this.password.length > 0) {
        if (this.password !== this.confirmPassword) {
          this.error = "Passwords didn't match!";
          isValid = false;
        }
        else if (this.password.length < 8) {
          this.error = "Password must have at least  8 symbols";
          isValid = false;
        }

        else if (!this.password.match(numbers)) {
          this.error = "Password must contain at least 1 number";
          isValid = false;
        }

        else{
            this.error = ''
            isValid = true
        }
      }
      else{
        this.error = "Enter a password."
        isValid = false
      }
    //   if (isValid) {
    //     console.log(isValid);
    //     this.$store.dispatch("registerUser", {
    //       email: this.email,
    //       password: this.password,
    //     });
    //   }
    console.log(isValid, this.error)
    return isValid
    },
  },
};
</script>
