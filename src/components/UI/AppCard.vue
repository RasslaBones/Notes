<template>
    <div class="card card__wrapper" :class="color + (isChecked ? '-checked' : '')" @click="updateState">
        <div class="card__X" @click.stop="deleteNote">&times;</div>

        <input v-model="isChecked" class="checkbox" type="checkbox" />
        <div class="card__text">
            <div class="card__header">
                <div class="card__title"><strong>{{ title }}</strong></div>
                <div class="card__date"><strong>{{ date }}</strong></div>
            </div>
            <div class="card__desc">{{ text }}</div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AppCard',
    data(){
        return{
            isChecked: this.done
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
        },
        done:{
            type: Boolean,
            default: false,
        },  
        title: {
            type: String,
            default: 'My note'
        },
        date: {
            type: String,
            default: new Date().toISOString().slice(0,10),
        },
        text: {
            type: String,
            default: "This is my note, hope I won't forget about it."
        },
        id: {
            type: String,
            required: true
        }
    },
    methods:{
        deleteNote(){
            this.$store.dispatch('deleteNote',this.id)
        },
        updateState(){
            this.isChecked = !this.isChecked
            this.$store.dispatch('updateStateOfNote',{
                id: this.id,
                putData: this.isChecked
            })
        }
    }
}
</script>

