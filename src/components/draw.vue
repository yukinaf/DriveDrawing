<template>
  <div id = "app">
    <p>お題：{{theme}}</p>
    <p>描き手：{{playerName}}さん</p>
    <div id="canvas-area">
      <!-- pcのときのキャンバス処理 -->
      <canvas id="Canvas" width = "350px" height = "350px" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"  v-if="this.judgment" ></canvas>

      <div class="text-center">
            <!-- 赤 -->
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#ff0000"
              v-on:click = "changeColor('#ff0000')"
            ></v-btn>
            <!-- オレンジ -->
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#ffa500"
              v-on:click = "changeColor('#ffa500')"
            ></v-btn>
            <!-- 緑 -->
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#00ff00"
              v-on:click = "changeColor('#00ff00')"
            ></v-btn>
            <!-- 青 -->
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#0000ff"
              v-on:click = "changeColor('#0000ff')"
            ></v-btn>
            <!-- 紫 -->
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#ee82ee"
              v-on:click = "changeColor('#ee82ee')"
            ></v-btn>
            <!-- 黒 -->
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#000000"
              v-on:click = "changeColor('#000000')"
            ></v-btn>
      </div>
      <br/>

      <v-btn
        depressed
        color="success"
        dark
        v-on:click = "keep"
      >
        次へ
      </v-btn>
      {{ keep.title }}
    </div>
  </div>
</template>

<script>
//HomeからplayerIDとplayerNameを読み込むためのコードを書く
// import { hensu } from "../view/Home.vue"
import isMobile from 'ismobilejs'

export default {
  name: "Draw",
  data() {
    return {
        canvas: null,
        context: null,
        isDrag: false,
        userPic: null,
        section:1,
        playerName: null,
        theme: this.$store.state.theme,
        judgment: true
    };
  },
  //端末情報を取得
  isMobileAny: function(judgment) {
    if (!isMobile.any) {
      //スマホ（タブレット）のとき
      //console.log('端末はスマホです');
      return this.judgment=true;
    }
      //PCのとき
      // console.log('端末はPCです');
      // return this.judgment = false;
  },
  created() {
    //回数ごとのプレイヤー名の表示
    this.playerName = eval("this.$store.state.player" + this.section);
  },
  mounted(){
    this.canvas = document.querySelector('#Canvas')
    this.context = this.canvas.getContext('2d')
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 5;
    //ペン色指定はここ
    this.context.strokeStyle = 'red';
  },
  methods: {
    // 描画
    draw: function(e) {
      var x = e.layerX
      var y = e.layerY

      if(!this.isDrag) {
        return;
      }

      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画開始（mousedown）
    dragStart: function(e) {
      //毎回ここで画面をクリア
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //線の描画
      var x = e.layerX
      var y = e.layerY

      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();
      this.isDrag = true;
    },
    // 描画終了（mouseup, mouseout）
    dragEnd: function() {
      this.context.closePath();
      this.isDrag = false;
    },
    changeColor: function(c){
      var color = c;
      //ペン色指定はここ
      this.context.strokeStyle = color;
    },
    keep: function() {
      //canvasの描画内容をデータURLに変換する
      let playerPicURL = this.canvas.toDataURL("image/png");

      //描画回数に応じてデータURLを設定する
      if(this.section == 1){
        this.$store.commit('setPic1URL', {pic1: playerPicURL})
      //console.log(this.$store.state.pic1)
      }else if(this.section == 2){
        this.$store.commit('setPic2URL', {pic2: playerPicURL})
      }else{
        this.$store.commit('setPic3URL', {pic3: playerPicURL})
      }

      //描画回数が3回以内だったら，繰り返し描画画面を表示する
      //3人全員が描画したなら選択画面へ移行する
      if(this.section < 3){
        this.playerName = null
        this.playerPicURL = null
        //毎回ここで画面をクリア
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.section++
        //回数ごとのプレイヤー名の表示
        this.playerName = eval("this.$store.state.player" + this.section);
      }else{
        //次のページへ移行する
        this.$router.push('/illustSelect')
      }
    }
  }
};
</script>

<style scoped>
#Canvas {
  /* 枠線の色 */
  border: 1px solid #000000;
}

#button {
  background-color: darkgrey;
}

#container {
  width: 20%;
  margin-top: 20px;
}

.text-center button{
  margin-right: 5px;
}
</style>