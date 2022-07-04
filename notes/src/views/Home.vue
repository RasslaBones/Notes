<template>
  <div class="home">
    <div class="home__buttons buttons">
      <div class="buttons__create" @click="openModal">
        <img src="@/assets/icons/plus.svg" alt="" /><span>create</span>
      </div>
      <div class="buttons__view">
        <div
          class="buttons__view_small"
          @click="viewMode()"
          :class="isSmall ? 'active' : ''"
        >
          <img src="@/assets/icons/list-check.svg" alt="" />
        </div>
        <div
          class="buttons__view_large"
          @click="viewMode()"
          :class="!isSmall ? 'active' : ''"
        >
          <img src="@/assets/icons/list-check.svg" alt="" />
          <img src="@/assets/icons/list-check.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="home__content">
      <img src="@/assets/icons/Empty-icon.svg" alt="" />
      <h3>no created notes</h3>
      <p>create one</p>
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

<style></style>
