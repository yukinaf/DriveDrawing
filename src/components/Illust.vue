<template>
  <div>
    <img src="../assets/output_star.png" id="illust" v-on:load="changeSrc">
    <!-- <img src="../assets/output_star.png" id="illust" > -->
  </div>
</template>

<script>
export default {
  name: "Illust",
  data() {
    return {
      imgsrc: this.$store.state.selectedPic
    };
  },
  methods: {
    changeSrc: function(){
      var newSrc = document.getElementById('illust');
      newSrc.setAttribute('src', this.imgsrc);
    }
  }
}

</script>

<style scoped>
#Illust {
  z-index: 10;
}
</style>