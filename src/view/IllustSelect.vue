<template>
  <div id="illustselect">
    <Header />
    <h1>お題：{{ theme }}</h1>
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col
          align="center" justify="center"
            v-for="n in 3"
            :key="n"
            class="d-flex child-flex"
            cols="6"
            md="6"
          >
          <!-- md="6" -->
            <v-card
              elevation="24"
              v-bind:color="color[n - 1]"
              v-on:click="select(n)"
            >
              <v-img
                v-bind:src="imgsrc[n - 1]"
                max-height="300"
                contain
                class="grey darken-4"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
    <h2 v-if="isselected != null">
      {{ playerName[isselected - 1] }}の絵にする
    </h2>
    <br />
    <!-- このボタンを押したら次のページへ -->
    <v-btn
      depressed
      color="success"
      dark
      style="border-width: 4px; font-size: 20px"
      v-if="isselected != null"
      @click="toNext()"
    >
      OK!!
    </v-btn>
  </div>
</template>

<script>
import Header from "../components/header.vue";

export default {
  name: "IllustSelect",
  components: {
    Header,
  },
  data() {
    return {
      //databaseから持ってきたお題を入れる
      theme: this.$store.state.theme,

      //databaseから持ってきた絵を入れる
      imgsrc: [
        this.$store.state.pic1,
        this.$store.state.pic2,
        this.$store.state.pic3,
      ],
      cHeight: 10,
      isselected: null,
      color: ["#DFECAA", "#DFECAA", "#DFECAA", "#45A1CF"],
      //データベースからユーザーネームをリスト化する
      playerName: [
        this.$store.state.player1,
        this.$store.state.player2,
        this.$store.state.player3,
      ],
    };
  },
  created() {
    //データ引き継ぎ確認
    //console.log("GroupID:"+this.$store.state.groupID)
  },
  methods: {
    select(n) {
      this.isselected = n;
      for (let i = 0; i < 3; i++) {
        this.color[i] = "#DFECAA";
      }
      this.color[n - 1] = "#45A1CF";
    },
    toNext() {
      //選択した画像を登録
      let selectedPicURL = this.imgsrc[this.isselected - 1];
      this.$store.commit("setSelectedPicURL", { selectedPic: selectedPicURL });

      //サーバーに保存する作業
      var params = new URLSearchParams();
      params.append("groupID", this.$store.state.groupID);
      params.append("player1Name", this.$store.state.player1);
      params.append("player2Name", this.$store.state.player2);
      params.append("player3Name", this.$store.state.player3);
      params.append("theme", this.$store.state.theme);
      params.append("player1Pic", this.$store.state.pic1);
      params.append("player2Pic", this.$store.state.pic2);
      params.append("player3Pic", this.$store.state.pic3);
      params.append("selectedPic", this.imgsrc[this.isselected - 1]);
      this.$axios
        .post(
          "https://takano.nkmr.io/hackathon2021_group3/result_post.php",
          params
        )
        .then((response) => {
          //上手く行った時
          console.log("status:", response.status);
        })
        .catch((error) => {
          //失敗した時
          alert("エラーが発生しました");
          console.log("err:", error);
        });

      //地図と絵を表示したページに遷移させる(OnMapページ?)
      this.$router.push("/Onmap");
    },
  },
};
</script>
