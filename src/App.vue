<template>
  <HautDePage/>
  <div class="container">
  <router-view></router-view>
  </div>
  <Pied/>
</template>

<script>
import HautDePage from "./components/HautDePage.vue";
import Pied from "./components/Pied.vue"

export default {
  components: {
    HautDePage,
    Pied
  }
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  font-family: Poppings, sans-serif;
  padding: 0;
  margin: 0;
}

.container {
  flex-grow: 1;
}
</style>