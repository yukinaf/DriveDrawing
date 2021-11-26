<template>
  <div>
    <div :id="mapName" class="googleMap"></div>
  </div>
</template>

<script>
  export default {
  async mounted(){
    this.$nextTick(() => {
      try {
        const position = await this.getCurrentPosition()
        this.center.lat = position.coords.latitude
        this.center.lng = position.coords.longitude
      } catch (error) {
        alert(error)
      }
    })
  },
  methods:{
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        const message = [
          '現在位置が取得できませんでした',
          '位置情報の利用が許可されていません',
          '現在位置が取得できませんでした',
          'タイムアウトになりました',
          '現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。'
        ]
        if (window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
            response => {
              resolve(response)
            },
            error => {
              reject(message[error.code])
            },
            {
              enableHighAccuracy: false,
              timeout: 5000,
              maximumAge: 0
            }
          )
        } else {
          reject(message[4])
        }
      })
    }
  },

    mounted(){
      this.$nextTick(function () {
        this.element = document.getElementById(this.mapName)
        // this.latlng = new google.maps.LatLng(34.724888, 135.500612)
        this.mapOptions = {
          zoom: 17, //表示時の地図の大きさ
          center: {lat:this.center.lat,lng:this.center.lng}, //表示時の地図の中心座標
          gestureHandling: 'greedy',
          scaleControl: false,
          mapTypeControl: false,
          zoomControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }
        this.map = new google.maps.Map(this.element, this.mapOptions)
        this.label = {
          color: 'rgb(231, 222, 202)', //色
          fontFamily: 'Myfont', //フォント指定
          fontSize: '13px', //フォントのサイズ指定
          fontWeight: 'bold' //文字の太さ
        }
      })
    }
  }
</script>
<style>
.googleMap {
  height: 500pt;
  width: 100%;
  z-index: 2 !important;
}
</style>
