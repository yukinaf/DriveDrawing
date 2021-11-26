<template>
  <div id="nowdrawing">
    <Header />
    <Draw />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Draw from '../components/draw.vue'

export default {
  name: 'NawDrawing',
  components: {
    Header,
    Draw
  }
}
</script>

<style>
#nowdrawing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}
</style>