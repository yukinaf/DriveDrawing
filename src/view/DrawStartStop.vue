<template>
  <div id = "startstop">
    <Header />
    <v-btn
      @click = "toNext"
      id = "stop"
      rounded
      dark
    >
    Stop
    </v-btn>
    <v-btn
      id = "start"
      rounded
      dark
    >
    Start
    </v-btn>

    <div id = "overlays">
      <div id = "overlay1">
        <!-- ここでonmapで保存した画像を取得 -->
        <img src = "../assets/output_star.png" id = "illust" v-on:load="changeSrc">
      </div>
      <div id = "overlay2">
        <navigation />
      </div>
      <!-- RoadAPIを使うなら，前のonmapのときに画像化しないでmapの情報（緯度経度ズーム値）を持ってきて，ここで3枚を重ねる
      一番下のマップでRoadAPI読み込み？する → キャンバスの最終位置を画像化して最後のページに表示-->
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import navigation from "../components/navigation.vue"

export default {
  name: 'DrawStartStop',
  components: {
    Header,
    navigation
  },
  data() {
    return {
      illpicture: this.$store.state.illpic
    }
  },
  methods: {
    changeSrc: function(){
      var newSrc = document.getElementById('illust');
      newSrc.setAttribute('src', this.illpicture);
    },
    toNext() {
      this.$router.push('/twittershare');
    }
  },
  created() {
    //引き継ぎの確認できた
    //console.log("Illpic:" + this.$store.state.illpic)
  }
  //RoadAPIを使うなら，onmapではなくここでcaptureImage()をする
  //キャンパスにはマップ（GPSでドローイングした痕跡があるもの）とユーザが描いたイラストを重ねてあげると本来の場所との差分がわかりやすいかも
}
</script>

<style>
#startstop {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}
#overlays {
  position: relative;
  display: flex;
  justify-content: center;
}
#overlay1 {
  position: absolute;
  z-index: 1;
}
#overlay2 {
  position: absolute;
  z-index: 2;
}
#stop {
  background-color: rgb(70, 171, 253);
  margin-bottom: 20px;
  margin-left: 25px;
  margin-right: 40px;
}
#start {
  background-color: rgb(253, 70, 125);
  margin-bottom: 20px;
  margin-right: 5px;
}
</style>
