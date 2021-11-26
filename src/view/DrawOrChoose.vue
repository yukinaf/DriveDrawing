<template>
  <div id="draworchoose" class="my-2">
    <Header />
    <br><br>
    <v-btn
      x-large
      color="success"
      dark
      @click="DrawingIllustration"
    >
      Drawing Illustration
    </v-btn>
<br><br><br>
    <v-btn
      x-large
      color="success"
      dark
      @click="ChooseIllustration"
    >
      Choose Illustration
    </v-btn>

  </div>
</template>

<script>
import Header from '../components/header.vue'
//import NowDrawing from '../view/NowDrawing.vue'
//import IllustSelect from '../view/IllustSelect.vue'

export default {
  name: 'DrawOrChoose',
  components: {
    Header
  },
    methods:{
      DrawingIllustration(){
            this.$router.push(`/DecideTheme`)
        },
        ChooseIllustration(){
            this.$router.push(`/Chooseillustration`)
        },
    },
    }
</script>

<style scoped>
#draworchoose {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}

</style>