<template>
  <div>
    <div id="gmap" v-cloak></div>
  </div>
</template>

<script>
import {Loader} from 'google-maps';
const loader = new Loader('GoogleMapのAPIを記入する');

async function getCurrentPositionAsPromise() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

export default{
  name: "gmap",
  //現在地を取得してマップ表示
  mounted() {
    this.createMap()
  },
  methods: {
    async createMap() {
      if (navigator.geolocation) {
        const position = await getCurrentPositionAsPromise().catch(error => {
            console.log(error)
        });
        const coords = position.coords;
        const google = await loader.load();
        const map = new google.maps.Map(document.getElementById('gmap'), {
          center: {lat: coords.latitude, lng: coords.longitude},
          zoom: 10,
        });
        this.$store.commit('setMap', map);
      }
    }
  },
  data: function(){
    return{
      //ここでスタート地点の場所設定（現在地：東京駅）
      // latlng: [35.6809591, 139.7673068],
      scale: 16
    }
  }
}
</script>

<style scoped>
#gmap{
  width: 350px;
  height: 350px;
  /* 透明度いじるならここ */
  opacity: 70%;
}
div {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
illust {
  z-index: 100px;
}
[v-cloak] {
  display: none;
}
</style>