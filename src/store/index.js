import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //data()のようなところ
    groupID:"a",
    player1:"b",
    player2:"c",
    player3:"d",
    theme:"e",
    pic1:"f",
    pic2:"g",
    pic3:"h",
    map: {},
    illpic: "i"
  },
  mutations: {
    //val:HomeからもらったgroupID
    setGroupID(state, val){
      state.groupID = val.groupID
    },
    setPlayerName(state, val){
      state.player1 = val.player1,
      state.player2 = val.player2,
      state.player3 = val.player3
    },
    setTheme(state, val){
      state.theme = val.theme
    },
    setPic1URL(state, val){
      state.pic1 = val.pic1
    },
    setPic2URL(state, val){
      state.pic2 = val.pic2
    },
    setPic3URL(state, val){
      state.pic3 = val.pic3
    },
    setSelectedPicURL(state, val){
      state.selectedPic = val.selectedPic
    },
    setMap(state, val){
      state.map = val;
    },
    setIllPic(state, val) {
      state.illpic = val.illpic;
    }
  },
  actions: {
  },
  modules: {
  }
})