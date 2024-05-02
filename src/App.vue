

<template>
  <div class="container">
    <header-top />
    <body-wrapper />
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import BodyWrapper from "./components/BodyWrapper.vue";

export default {
  name: "App",
  components: { HeaderTop, BodyWrapper },
};
</script>

<style lang="scss">
@import url("~@/assets/style/main.scss");
</style>

