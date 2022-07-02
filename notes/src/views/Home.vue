<template>
    <div class="home__container">
        <app-card :color="'green'"></app-card>
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