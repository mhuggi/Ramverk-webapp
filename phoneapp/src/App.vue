<template>
  <div id="app">
    <Suggestions />
  </div>
</template>

<script>
import Suggestions from './components/Suggestions'

export default {
  name: 'App',
  components: {
    Suggestions
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
