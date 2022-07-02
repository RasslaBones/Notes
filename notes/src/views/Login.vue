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
                <input type="email" id="email" placeholder="Email...">
            </div>

            <div class="login__input">
                <label for="Password">Password</label>
                <input type="text" id="Password" placeholder="Password..."> <!-- change type to password -->
                <router-link class="login__signup" to="signup">No account ?</router-link>
            </div>

            <app-button class="login__enter" :style="'gradient'">Enter</app-button> 
        </div>
    </div>  
</template>

<script>
import AppButton from '@/components/UI/AppButton.vue';
export default{
    components: {
        AppButton
    }
}
</script>