<template>

  <div class="home__container home" v-if="checkUser">
    <div class="home__buttons buttons">
      <div class="buttons__create" @click="openModal">
        <img src="@/assets/icons/plus.svg">
        <div class="buttons__text">Create</div>
      </div>
      <div class="buttons__view view">

        <div class="view__small" :class="isSmall ? 'active' : ''" @click="this.isSmall = true">
            <img src="../assets/icons/list-check.svg" />
        </div>

        <div class="view__line"></div>

        <div class="view__large" :class="!isSmall ? 'active' : ''" @click="this.isSmall = false">
            <img src="../assets/icons/list-check.svg" />
            <img src="../assets/icons/list-check.svg" />
        </div>

      </div>
    </div>
    <div class="home__empty" v-if="!user.notes.length"> 
      <img src="@/assets/icons/Empty-icon.svg" />
      <div class="home__title"><strong>No created notes</strong></div>
      <div class="home__text">Create a note!</div>
    </div>

    <div v-else>
      <div class="home__examples examples">
      <div class="examples__red">
        <div class="examples__dot red-dot"></div>
        <div class="examples__title"><strong>Urgent</strong></div>
      </div>
      <div class="examples__orange">
        <div class="examples__dot orange-dot"></div>
        <div class="examples__title"><strong>Normal</strong></div>
      </div>
      <div class="examples__green">
        <div class="examples__dot green-dot"></div>
        <div class="examples__title"><strong>Simple</strong></div>
      </div>
    </div>
    
    <div class="home__notes notes" :class="isSmall ? 'notes-col' : ''">
      <div class="notes__red" v-if="findRedNotes.length > 0">
        <div class="notes__title title__red"><strong>Urgent</strong></div>
        <div class="notes__red__wrapper" :class="isSmall ? 'borderless' : ''">
          <app-card 
        v-for="item in findRedNotes" :key="item"
        :color="item.type" 
        :title="item.title"
        :date="item.date"
        :text="item.content"
        :done="item.done"
        :id="item._id"
        ></app-card>
        </div>
      </div>
      <div class="notes__orange" v-if="findOrangeNotes.length > 0">
        <div class="notes__title title__orange"><strong>Normal</strong></div>
        <div class="notes__orange__wrapper" :class="isSmall ? 'borderless' : ''">
          <app-card 
        v-for="item in findOrangeNotes" :key="item"
        :color="item.type" 
        :title="item.title"
        :date="item.date"
        :text="item.content"
        :done="item.done"
        :id="item._id"
        ></app-card>
        </div>
      </div>
      <div class="notes__green" v-if="findGreenNotes.length > 0">
        <div class="notes__title title__green"><strong>Simple</strong></div>
        <div class="notes__green__wrapper">
          <app-card 
        v-for="item in findGreenNotes" :key="item"
        :color="item.type" 
        :title="item.title"
        :date="item.date"
        :text="item.content"
        :done="item.done"
        :id="item._id"
        ></app-card>
        </div>
      </div>
    </div>
    </div>

  </div>
  <app-modal ref="modal"></app-modal>
</template>

<script>
import AppCard from '@/components/UI/AppCard.vue';
import AppModal from '@/components/AppModal.vue';
import { mapGetters, mapState } from 'vuex';
export default {
  data() {
    return {
      isSmall: false,
      isCreator: false,
    };
  },
  computed:{
    ...mapState(['user']),
    ...mapGetters(['findRedNotes']),
    ...mapGetters(['findOrangeNotes']),
    ...mapGetters(['findGreenNotes']),
    checkUser(){
      if(Object.keys(this.user).length == 0 ){
        return false
      }
      else return true
    }
  },
  methods:{
    addNote(){
      this.$store.commit("addNote")
    },
    openModal() {
      this.$refs.modal.open();
    }
  },
  components: {
    AppCard,
    AppModal
  }
}
</script>
