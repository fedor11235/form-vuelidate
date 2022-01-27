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

<style lang="sass">
#app 
  margin-top: 60px

body 
  background: #333
  font-family: 'PT Sans', sans-serif
  padding: 20px
</style>
