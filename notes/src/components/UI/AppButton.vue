<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
};
</script>

<style lang="scss" scoped>
button {
  font-size: 18px;
  font-weight: 700;
}
</style>
