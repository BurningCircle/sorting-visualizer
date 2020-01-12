<template>
  <div class="home">
    <div class="content">
      <div class="title">{{ sortType }}</div>
      <div v-if="amount" class="content_wrapper">
        <span
          v-for="(item, index) in array"
          :key="index"
          :style="{ height: item / 12 + '%', width: amount / 120 + '%' }"
          :class="{ active: isCurrent(index) }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
  name: "home",
  computed: {
    ...mapState(["array", "amount", "current_items", "sortType"])
  },
  methods: {
    isCurrent(id) {
      return this.current_items.includes(id)
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  position: relative
  width: 100%
  height: 100%
  padding: 20px

  .content
    position: relative
    width: 100%
    height: 100%
    box-shadow: -4px -4px 12px rgba(255, 255, 255, 1), 4px 4px 12px rgba(0,0,0,.15)
    padding: 20px

    .title
      position: absolute
      top: 20px
      right: 20px
      font-size: 30px
      font-weight: 700
      background-color: $primary_color
      color: transparent
      text-shadow: 2px 2px 3px rgba(255,255,255,0.5)
      -webkit-background-clip: text
      -moz-background-clip: text
      background-clip: text
      font-family: sans-serif

    .content_wrapper
      position: relative
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: flex-end

      span
        background: lighten($primary_color, 25)
        margin-left: 2px
        border-radius: 100px 100px 0px 0px
        transition: .1s height, 0s background
        box-shadow: -2px -2px 2px rgba(0, 0, 0, .3) inset

      .active
        background: $highlight_color
</style>
