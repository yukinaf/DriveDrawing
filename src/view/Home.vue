<template>
  <div id="app">
    <Homeheader />
    <p>ニックネームを入力してください</p>
    <br/>

  <v-form>
    <v-container id="container">
      <v-row
        id="row"
      >
        <v-text-field
          v-model="player1"
          :rules="nameRules"
          label="Player1"
          required
        ></v-text-field>
      </v-row>

      <v-row
        id="row"
      >
        <v-text-field
          v-model="player2"
          :rules="nameRules"
          label="Player2"
          required
        ></v-text-field>
      </v-row>

      <v-row
        id="row"
      >
        <v-text-field
          v-model="player3"
          :rules="nameRules"
          label="Player3"
          required
        ></v-text-field>
      </v-row>

      <v-row
        id="row"
      >
        <v-text-field
          v-show="hidden"
          v-model="player4"
          label="Player4"
          required
        ></v-text-field>
      </v-row>
    </v-container>
  </v-form>

  <v-fab-transition>
    <v-btn
      fab
      color="#87cefa"
      v-on:click="hidden = !hidden"
      id="button"
    >
      ＋
    </v-btn>
  </v-fab-transition>
  <br/>

  <v-btn
    depressed
    dark
    v-on:click = "toNext"
  >
    次へ
  </v-btn>
  </div>
</template>

<script>
import Homeheader from '../components/Homeheader.vue'
import Draw from '../components/draw.vue'

export default {
  name: 'App',
  components: {
    Homeheader,
    Draw
  },
  data() {
    return {
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      groupID: null
    }
  },
  data: () => ({
    nameRules: [
      v => !!v || '名前を入力してください'
    ],
    hidden: false
  }),
  created() {
    this.getGroupID()
  },
  methods: {
    getGroupID() {
        // 生成する文字列の長さ
        var l = 16;

         // 生成する文字列に含める文字セット
        var c = "abcdefghijklmnopqrstuvwxyz0123456789";

        var cl = c.length;
        var r = "";
        for(var i=0; i<l; i++){
          r += c[Math.floor(Math.random()*cl)];
        }
        //storeのsetGroupIDという関数にrというgroupIDをセットする
        this.$store.commit('setGroupID', {groupID: r})
        console.log("GroupID:"+this.$store.state.groupID)
    },
    getPlayerName() {
      var a1 = this.player1;
      var b2 = this.player2;
      var c3 = this.player3;
      this.$store.commit('setPlayerName', {player1: a1, player2: b2, player3: c3})
    },
    toNext() {
      //プレイヤー名の入力の確認(全員分入力されているか？)
      //必須項目などの選択チェック
        if(this.player1 != null && this.player2 != null && this.player3 != null){
          //入力されたプレイヤー名を取得・保存
          this.getPlayerName()
          //ここを描くor画像選択ページの方に遷移させる
          this.$router.push('/draworchoose');
        }else{
          alert("プレイヤー全員の名前を入力してください");
        }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  width: 100%;
  margin-top: 10px;
}

#container {
  width: 20%;
}

#row {
  margin-top: 20px;
}

#button {
  margin-bottom: 20px;
}

/* インプットのところのCSS素敵にして欲しいな  */

</style>