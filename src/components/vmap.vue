<template>
  <div>
    <div id="mymap" v-cloak></div>
  </div>
</template>

<script>

// Leeflet
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

export default{
  name: "vmap",
  //現在地を取得してマップ表示
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position){
          let coords = position.coords;
          // 緯度経度だけ取得
          this.latitude = coords.latitude;
          this.longitude = coords.longitude;
          //マップを表示
          this.map = L.map("mymap");
          //上で取得した緯度経度を代入
          this.map.setView([this.latitude, this.longitude], this.scale);
          //mapデザインを変えるならここを変更する
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.map);
        }.bind(this),
        function(error) {
          // エラーが出た時にアラートを出す（位置情報をオフにしているなど）
          alert('error');
        }
      );
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
#mymap{
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