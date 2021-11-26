<template>
  <div>
    <div>
      <canvas ref="canvas" v-bind="attr" @touchstart="dragStart" @touchend="dragEnd" @touchmove="draw"></canvas>
<!-- //スマホはこれ @touchstart="dragStart" @touchend="dragEnd" @touchmove="draw" -->
<!-- PC: @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw" -->
    </div>
    <div id="tool-area">
      <v-btn @click="context.globalCompositeOperation = 'source-over';mode = true" :color="mode ? 'red' : 'black'">ペン</v-btn>
      <v-btn @click="context.globalCompositeOperation = 'destination-out';mode = false" :color="!mode ? 'red' : 'black'">消しゴム</v-btn>
      <!-- globalCompositeOperationをdestination-outにしないとただ背景を白で塗りつぶすことになる。
      <v-btn @click="clear">クリア</v-btn>
    </div>
    <div>
      v-modelで常に色を双方向データバインディング -->
      <v-color-picker v-model="penColor"></v-color-picker>
      <!-- 色と同様ペンの太さを双方向データバインディング -->
      <v-slider v-model="lineWidth" ticks="always" max="20" thumb-label="always"></v-slider>
    </div>
  </div>
</template>

<script>

export default {
  name: 'testMovile',
  data() {
    return {
      attr: {
        width: '500px',
        height: '500px',
      },
      context: null,
      isDrag: false,
      penColor: '#000000',
      lineWidth: 10,
      mode: true,
    }
  },
  watch: {
    penColor(){//ペンの色が変わればcanvasのコンテキストに反映される
      this.context.strokeStyle = this.penColor;
    },
    lineWidth(){//ペンの太さがが変わればcanvasのコンテキストに反映される
      this.context.lineWidth = this.lineWidth;
    }
  },
  mounted(){
    //canvasの初期設定
    const canvas = this.$refs.canvas;
    this.context = canvas.getContext('2d')
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.penColor;
  },
  methods: {
    // 描画開始（mousedown）
    dragStart(e) {
      const x = e.layerX//canvas内のx座標を取得
      const y = e.layerY//canvas内のy座標を取得

      this.context.beginPath();
    //パスをリセット。これがないとクリックした場所から最初クリックした場所に毎回ラインが走る。
      this.context.lineTo(x, y);
      this.context.stroke();

      this.isDrag = true;
    },
    // 描画
    draw(e) {
      const x = e.layerX
      const y = e.layerY

      if(!this.isDrag) {
        return;
      }

      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画終了（mouseup, mouseout）
    dragEnd() {
      this.context.closePath();
      this.isDrag = false;
    },
    clear() {
      this.context.clearRect(0, 0, this.attr.width, this.attr.height);
      //canvasのwidthとheightを入れると全体がリセットされる。
    }
  }
}
</script>
