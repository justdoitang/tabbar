<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper.vue'

import { getHomeMultidata } from '@/network/home'

export default {
  name: '',
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  components: {
    NavBar,
    HomeSwiper
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
