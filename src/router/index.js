import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../view/Home.vue'
import NowDrawing from '../view/NowDrawing.vue'
import OnMap from '../view/OnMap.vue'
import TwitterShare from '../view/TwitterShare.vue'
import IllustSelect from '../view/IllustSelect.vue'
import DrawOrChoose from '../view/DrawOrChoose.vue'
import TestCapture from '../view/TestCapture.vue'
import CurrentLocationTest from '../view/CurrentLocationTest.vue'
import DecideTheme from '../view/DecideTheme.vue'
import Chooseillustration from '../view/Chooseillustration.vue'
import DrawStartStop from '../view/DrawStartStop.vue'
import NowDrawingForMobile from '../view/NowDrawingForMobile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  // mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/nowdrawing',
      name: 'nowdrawing',
      component: NowDrawing,
    },
    {
      path: '/onmap',
      name: 'onmap',
      component: OnMap,
    },
    {
      path: '/twittershare',
      name: 'twittershare',
      component: TwitterShare,
    },
    {
      path: '/illustselect',
      name: 'illutselect',
      component: IllustSelect,
    },
    {
      path: '/draworchoose',
      name: 'draworchoose',
      component: DrawOrChoose,
    },
    {
      path: '/testcapture',
      name: 'testcapture',
      component: TestCapture,
    },
    {
      path: '/locationtest',
      name: 'locationtest',
      component: CurrentLocationTest,
    },
    {
      path: '/DecideTheme',
      name: 'DecideTheme',
      component: DecideTheme,
    },
    {
      path: '/Chooseillustration',
      name: 'Chooseillustration',
      component: Chooseillustration,
    },
    {
      path: '/startstop',
      name: 'startstop',
      component: DrawStartStop,
    },
    {
      path: '/formobile',
      name: 'formobile',
      component: NowDrawingForMobile,
    }
  ]
})
