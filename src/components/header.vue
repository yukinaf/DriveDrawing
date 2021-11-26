<template>
  <div>
    <v-row>
      <v-col>
        <input
          id ="backbutton"
          type="image"
          v-bind:src="backimage"
          onclick="history.back()"
          height="50"
          width="50"
          style="position: absolute; left: 30px; top: 50px"
        />
        <img src="http://ueki.nkmr.io/img/DriveDrawing.png" id="logo" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      backimage: "http://ueki.nkmr.io/img/arrow.png",
    };
  },
};
</script>

<style scoped>
#logo {
  width: 300px;
}
#backbutton:hover {
  transform: translate3d(1px, 1px, 0);
}
</style>