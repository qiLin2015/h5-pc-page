<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './common/font/font.css';

#app {
  font-family: Didot, DidotBold, PingFangRegular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
