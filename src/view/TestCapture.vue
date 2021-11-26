<template>
  <div id = "onmap">
    <Header />
    <v-btn
      @click = "captureImage"
      id = "btn_choice"
      rounded
      dark
    >
    画像の保存
    </v-btn>
    <v-btn
      @click = "show =! show"
      id = "btn_change"
      rounded
      dark
    >
    イラスト表示切り替え
    </v-btn>

    <div id = "overlays">
      <div id = "overlay1">
        <gmap />
      </div>
      <div id = "overlay2" v-show = "show">
        <Illust />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import gmap from "../components/gmap.vue"
import Illust from '../components/Illust.vue'


export default {
  name: 'OnMap',
  components: {
    Header,
    Illust,
    gmap
  },
  data() {
    return{
      show: true
    }
  },
  methods: {
    toNext() {
      this.$router.push('/twittershare');
    },
    captureImage () {
      const img = new Image();
      const map = this.$store.state.map;
      console.log(this.$store.state.map)
      const mapsize = "350x350";
      img.src= `https://maps.googleapis.com/maps/api/staticmap?center=${map.center.lat()},${map.center.lng()}&zoom=${map.zoom}&size=${mapsize}&maptype=${map.mapTypeId}&key=GoogleAPIKey`;
      img.crossOrigin="anonymous"
      //ここで書いたイラスト取得
      img.onload = (e) => {
        const illust = document.getElementById("illust");
        const canvas = document.createElement("canvas");
        // const navi = document.createElement(ここにID);
        canvas.width = 350;
        canvas.height = 350;
        const ctx = canvas.getContext("2d");
        //一度
        ctx.clearRect(0, 0, 350, 350);
        //地図描画
        ctx.drawImage(img, 0, 0);
        //書いた画像描画
        ctx.drawImage(illust, 0, 0);
        //ここにナビのコードを追加する

        const link = document.createElement('a')
        link.href = canvas.toDataURL("image/png")
        link.download = `export_image.png`
        link.click()
      }
    }
  }
}
</script>

<style>
#canvas {
  border: solid #000000 1px;
}
#onmap {
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
#btn_change {
  background-color: rgb(70, 171, 253);
  margin-bottom: 20px;
  margin-left: 25px;
}
#btn_choice {
  background-color: rgb(253, 70, 125);
  margin-bottom: 20px;
  margin-right: 5px;
}
</style>