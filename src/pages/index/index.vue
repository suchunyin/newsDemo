<template>
  <div id="app">
    <div class="navbar-wrapper">
      <navbar />
    </div>
    <div class="main-wrapper"><router-view></router-view></div>
  </div>
</template>

<script>
import Navbar from "./layout/navbar.vue";
export default {
  name: "Index",
  components: { Navbar }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width:60%;
  margin-inline:20%;
}
</style>
