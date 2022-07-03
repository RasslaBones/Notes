<template>

  <div class="home__container home">
    <div class="home__buttons buttons">
      <div class="buttons__create">
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
    <div class="home__empty">
      <img src="@/assets/icons/Empty-icon.svg" />
      <div class="home__title"><strong>No created notes</strong></div>
      <div class="home__text">Create a note!</div>
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
};
</script>
