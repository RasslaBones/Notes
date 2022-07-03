<template>
    <div class="signup signup__wrapper">
        <div class="signup__hero">
            <div class="signup__image">
                <img src="@/assets/images/login-image.png" alt="Error"/>
            </div>
            <div class="signup__title">Lorem ipsun dolor sit amet quast</div>
            <div class="signup__text">Lorem ipsum</div>
        </div>
        <div class="signup__inputs">
            <div class="signup__input">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" placeholder="Email...">
            </div>

            <div class="signup__input">
                <label for="Password">Password</label>
                <div class="signup__password" v-if="!visibility">
                    <input v-model="password" type="password" id="password" placeholder="Password..." />
                    <img src="@/assets/icons/visibilityON.svg" alt="Error" @click="this.visibility = !this.visibility">
                </div>
                <div class="signup__password" v-else>
                    <input v-model="password" type="text" id="password" placeholder="Password..." />
                    <img src="@/assets/icons/visibilityOFF.svg" alt="Error" @click="this.visibility = !this.visibility">
                </div>
                <div class="signup__signup">Must have 8 or more symbols</div>
                <div class="signup__signup">Must have 1 or more digits</div>
            </div>

            <div class="signup__input">
                <label for="confirm">Confirm Password</label>
                <div class="signup__password" v-if="!visibility">
                    <input v-model="confirmPassword" type="password" id="confirm" placeholder="Password..." />
                    <img src="@/assets/icons/visibilityON.svg" alt="Error" @click="this.visibility = !this.visibility">
                </div>
                <div class="signup__password" v-else>
                    <input v-model="confirmPassword" type="text" id="confirm" placeholder="Password..." />
                    <img src="@/assets/icons/visibilityOFF.svg" alt="Error" @click="this.visibility = !this.visibility">
                </div>
            </div>

            <app-button class="signup__enter wide-button" :style="'gradient'" @click="submit">
                <router-link to="/login">Sign Up</router-link>
            </app-button> 
        </div>
    </div>  
</template>

<script>
import AppButton from '@/components/UI/AppButton.vue'
export default{
    data(){
        return{
            visibility: false,
            password: '',
            confirmPassword: '',
            email: '',
        }
    },
    components: {
        AppButton
    },
    methods: {
        submit(){
            this.$store.dispatch("registerUser",{
                email: this.email,
                password: this.password
            })
        }
    }
}  
</script>