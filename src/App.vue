<template>
  <div id="app">
    <app-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import { Menu } from "@components/menu"

export default {
  name: "app",
  components:{
    'app-menu': Menu
  },
  created(){
    this.$store.commit('set_amount', 50)
    this.$store.dispatch('generateRandomArray')
  }
}
</script>

<style lang="sass">
*
  box-sizing: border-box

html,
body
  width: 100%
  height: 100%
  margin: 0

#app
  position: relative
  width: 100%
  height: 100%
  background: $base_color
  display: grid
  grid-template-columns: 80px auto
</style>
