<template>
  <div id="app">
    <CreateClient></CreateClient>
  </div>
</template>

<script>
import CreateClient from './components/CreateClient.vue'

export default {
  name: 'App',
  components: {
    CreateClient
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
