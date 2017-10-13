<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="section"></router-view>
  </div>
</template>

<script>

import navbar from './components/navbar'

// firebase start
// firebase end

export default {
  name: 'app',
  components: {
    navbar
  },
  mounted () {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


<style lang="sass">

@import '~bulma'

</style>