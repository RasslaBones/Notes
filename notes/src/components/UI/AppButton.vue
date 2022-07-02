<template>
  <button :class="style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: ['style']
};
</script>

<style lang="scss" scoped>
button {
  font-size: 18px;
  font-weight: 700;
}
.login {
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding: 5px 20px;
}
.signin {
  background-color: #cdcdcd;
  border-radius: 8px;
  padding: 5px 20px;
  color: #fff;
}
.gradient {
  color: white;
  background: linear-gradient(112.73deg, #FB6868 -4.84%, #46BEA6 106.63%);
  border-radius: 8px;
  padding: 5px 20px;
}
</style>
