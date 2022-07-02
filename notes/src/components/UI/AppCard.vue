<template>
    <div class="card card__wrapper" :class="color + (isChecked ? '-checked' : '')" @click="this.isChecked = !this.isChecked">
        <input v-model="isChecked" class="checkbox" type="checkbox" />
        <div class="card__text">
            <div class="card__header">
                <div class="card__title"><strong>Lorem Ipsum</strong></div>
                <div class="card__date"><strong>12/04/2021</strong></div>
            </div>
            <div class="card__desc">Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel. Mel facilis sensibus petentium in, ne ignota mollis suavitate mei.</div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AppCard',
    data(){
        return{
            isChecked: false
        }
    },
    props: {
        color: {
            type: String,
            required: true,
            default: "red",
            validator(val){
                return ['red','orange','green'].includes(val)
            }
        }
    }
}
</script>