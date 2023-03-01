<template>
  <div id="app">
    <div class="navbar-wrapper">
      <navbar />
    </div>
    <div class="main-wrapper"></div>
  </div>
</template>

<script>
import Navbar from "./layout/navbar.vue";
export default {
  name: "Index",
  components: { Navbar }
};
</script>

<style></style>
