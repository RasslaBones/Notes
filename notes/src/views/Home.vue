<template>
    <div class="home__container">
        <app-card :color="'red'"></app-card>
    </div>
</template>

<script>
import AppCard from '@/components/UI/AppCard.vue'    
export default{
    components:{
        AppCard
    }
}
</script>