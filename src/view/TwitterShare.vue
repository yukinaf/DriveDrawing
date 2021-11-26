<template>
  <div id="twittershare" class="text-center">
    <Header />
    <img src = "../assets/output_star.png" id = "illust">
    <br>
    <v-btn
      rounded
      color="primary"
      @click="twitterShare"
      dark
      id = "btn"
    >
      ツイッターでシェアする
    </v-btn>

    <v-btn
      rounded
      color="purple"
      @click="toInstagram"
      dark
      id = "btn"
    >
      インスタに投稿する
    </v-btn>


  </div>
</template>

<script>
import Header from '../components/header.vue'

export default {
  name: 'TwitterShare',
  components: {
    Header
  },
    methods:{
        twitterShare(){
           //シェアする画面を設定
            var shareURL1 = 'https://twitter.com/intent/tweet?text=' + "完成したイラストをみんなにシェアしよう！" + "%0a%0a%20%23DriveDrawing" + '&url='+ "http://ueki.nkmr.io/drivedrawing/#/";
           //シェア用の画面へ移行
            location.href = shareURL1
        },
        toInstagram(){
           //シェアする画面を設定
            var shareURL2 = 'https://www.instagram.com/';
           //シェア用の画面へ移行
            location.href = shareURL2
        }
    }

}
</script>

<style scoped>
#twittershare {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}

.twitter_share{
    max-width: 1000px;
    margin: auto;
}
#btn {
  /* ボタン色を変えるならここ変えてね */
  background-color: darkorchid;
}
</style>