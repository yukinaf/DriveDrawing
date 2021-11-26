<template>
  <div id="nowdrawingformobile">
    <Header />
    <DrawMobile />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import DrawMobile from '../components/drawMobile.vue'

export default {
  name: 'NawDrawingForMobile',
  components: {
    Header,
    DrawMobile
  }
}
</script>

<style>
#nowdrawingformobile {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}
</style>