<template>
  <div id = "illustselect">
    <Header />
    <h1>お題：○○</h1>
    <h1>選択されているのは、{{ isselected }}です</h1>
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col v-for="n in 4" :key="n" class="d-flex child-flex" cols="6">
            <v-card elevation="3" outlined tile height="cHeight" v-on:click="select(n)">
              <v-img v-bind:src="imgsrc[n - 1]" max-height="300" contain class="grey darken-4"></v-img>
              <v-card-title class="text-h6" v-text="username[n - 1]">
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
    <v-btn elevation="19" v-if="isselected != null" @click="toNext()">
      OK!!
    </v-btn>
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  name: 'IllustSelect',
  omponents: {
    Header
  },
  data() {
    return {
      imgsrc: [
        "https://m.media-amazon.com/images/I/91irTMMRJSL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71JgSOG0SwL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Nn8sP0RpL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61mI4uUYWkL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Nn8sP0RpL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81XEbI-kM0L._AC_SL1200_.jpg",
      ],
      cHeight: 10,
      isselected: null,
      username: ["れん さん", "はると さん", "あおい さん", "　さん"],
    };
  },

  methods: {
    select(n) {
      this.isselected = n;
    },
  },
};
</script>