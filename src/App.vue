<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Rajdhani, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

h1 {
  text-align: center;
}

.v-application--wrap {
    min-height: 0vh !important;
}

.v-image__image {
    background-size: cover!important;
}
  
</style>
