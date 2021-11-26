<template>
  <div id="illustselect">
    <Header />
    <br />
    <p>お題を入力してください</p>
    <br />
    <v-form id="text-field">
      <v-text-field
        v-model="theme"
        filled
        label="お題"
      ></v-text-field>
    </v-form>
    <v-btn
      depressed
      color="success"
      dark
      style="border-width: 4px; font-size: 20px"
      @click="toNextMobile()"
      >スマホで遊ぶ</v-btn>

      <v-btn
      depressed
      color="success"
      dark
      style="border-width: 4px; font-size: 20px"
      @click="toNextPC()"
      >PCで遊ぶ</v-btn>
      <br /><br />
    <v-divider></v-divider><br /><br />
    <v-btn
      depressed
      color="success"
      dark
      style="border-width: 4px; font-size: 20px"
      @click="autoTheme()"
      >AUTO SELECT</v-btn
    >
  </div>
</template>

<script>
import Header from "../components/header.vue";
import isMobile from 'ismobilejs'

export default {
  name: "IllustSelect",
  components: {
    Header,
  },
  data() {
    return {
      theme: "ほし",
      cHeight: 10,
      isselected: null,
      //judge: 0
    };
  },
  //isMobileAny: function() {
    //     if (isMobile.any) {
    //       judge = 1;
    //     }else{
    //     judge = 2;
    //     }
    // },
  methods: {
    autoTheme() {
      var themeExample = [
        "ハート",
        "かさ",
        "三日月",
        "スネ夫",
        "さかな",
        "五輪マーク",
        "クローバー",
        "チューリップ",
        "音符",
        "とり",
      ];
      var min = 0;
      var max = 9;
      var random = Math.floor(Math.random() * (max + 1 - min)) + min;
      this.theme = themeExample[random];
      console.log("Theme " + this.theme);
    },
    getTheme() {
      var a1 = this.theme;
      this.$store.commit("setTheme", { theme: a1 });
      //console.log("Theme " + this.$store.state.theme);
    },
    toNextPC() {
      if (this.theme != "" && this.theme != null) {
        //入力されたお題を取得・保存
        this.getTheme();
        //NowDrawingページに遷移させる
        this.$router.push("/NowDrawing");
      } else {
        alert("お題を入力してください");
      }
    },
    toNextMobile() {
      if (this.theme != "" && this.theme != null) {
        //入力されたお題を取得・保存
        this.getTheme();
        //NowDrawingページに遷移させる
        this.$router.push("/formobile");
      } else {
        alert("お題を入力してください");
      }
    },
  },
};
</script>

<style>
#text-field {
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
</style>