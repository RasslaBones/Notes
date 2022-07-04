<template>
  <div class="home__container home">
    <div class="home__buttons buttons">
      <div class="buttons__create">
        <img src="@/assets/icons/plus.svg" />
        <div class="buttons__text" @click="openModal()">Create</div>
      </div>
      <div class="buttons__view view">
        <div
          class="view__small"
          :class="isSmall ? 'active' : ''"
          @click="isSmall = true"
        >
          <img src="../assets/icons/list-check.svg" />
        </div>

        <div class="view__line"></div>

        <div
          class="view__large"
          :class="!isSmall ? 'active' : ''"
          @click="isSmall = false"
        >
          <img src="../assets/icons/list-check.svg" />
          <img src="../assets/icons/list-check.svg" />
        </div>
      </div>
    </div>
    <div class="home__empty">
      <img src="@/assets/icons/Empty-icon.svg" />
      <div class="home__title"><strong>No created notes</strong></div>
      <div class="home__text">Create a note!</div>
    </div>

    <!-- <app-modal v-if="isOpen" @closeModal="closeModal()"></app-modal> -->
    <!-- emit -->

    <app-modal ref="modal"></app-modal>
  </div>
</template>

<script>
import AppModal from "@/components/AppModal.vue";
export default {
  components: { AppModal },
  data() {
    return {
      isSmall: true,
    };
  },
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
    // openModal() {
    //   this.isOpen = true;
    // },
    // closeModal() {
    //   this.isOpen = false;
    // },
  },
};
</script>
