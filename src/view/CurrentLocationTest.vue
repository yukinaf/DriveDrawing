<template>
  <div>
    <div>
      <p>これは位置情報を取得して経度緯度が正しく表示されるかのテストです</p>
      {{latitude}}、{{longitude}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'locationtest',
  data() {
    return {
      latitude: 0,
      longitude: 0
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position){
          let coords = position.coords;
          // 緯度経度だけ取得
          this.latitude = coords.latitude;
          this.longitude = coords.longitude;
        }.bind(this),
        function(error) {
          // エラーが出た時にアラートを出す（位置情報をオフにしているなど）
          alert('error');
        }
      );
    }
  }
}
</script>