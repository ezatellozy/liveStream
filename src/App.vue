<template>
  <div id="app">
    <categories v-if="$store.state.username" />
    <router-view />
  </div>
</template>
<script>
import Categories from "./components/Categories.vue";

export default {
  components: { Categories },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  background: #2c3e50;
}
</style>
