<template>
    <div class="login login__wrapper">
        <div class="login__hero">
            <div class="login__image">
                <img src="@/assets/images/login-image.png" alt="Error"/>
            </div>
            <div class="login__title">Lorem ipsun dolor sit amet quast</div>
            <div class="login__text">Lorem ipsum</div>
        </div>
        <div class="login__inputs">
            <div class="login__input">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" placeholder="Email...">
            </div>

            <div class="login__input">
                <label for="password">Password</label>
                <div class="login__password" v-if="!visibility">
                    <input v-model="password" type="password" id="password" placeholder="Password..." />
                    <img src="@/assets/icons/visibilityON.svg" alt="Error" @click="this.visibility = !this.visibility">
                </div>
                <div class="login__password" v-else>
                    <input v-model="password" type="text" id="password" placeholder="Password..." />
                    <img src="@/assets/icons/visibilityOFF.svg" alt="Error" @click="this.visibility = !this.visibility">
                </div>
            </div>

            <app-button class="login__enter" :style="'gradient'" @click="logIn">Enter</app-button>
   
        </div>
    </div>  
</template>

<script>
import AppButton from '@/components/UI/AppButton.vue';
export default{
    data(){
        return{
            visibility: false,
            password: '',
            email: ''
        }
    },
    methods:{
        logIn(){
            this.$store.dispatch("loginUser",{
                email: this.email,
                password: this.password
            }).then(()=> this.$router.push('/'))
        }
    },
    components: {
        AppButton
    }
}
</script>