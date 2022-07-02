<template>
  <div class="home">
    <div class="home__buttons buttons">
      <div class="buttons__create">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSmall: true,
    };
  },
  methods: {
    viewMode() {
      this.isSmall = !this.isSmall;
    },
  },
};
</script>

<style></style>
