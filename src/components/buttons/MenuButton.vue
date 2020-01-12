<template>
  <button :class="shape" @click="click">
    <i class="material-icons icon">
      {{ iconName }}
    </i>
  </button>
</template>

<script>
export default {
  name: "menu_button",
  props: {
    iconName: {
      type: String,
      required: true
    },
    shape: {
      type: String,
      default: "box"
    },
    click: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
button
  width: 50px
  height: 50px
  background: $base_color
  border: 5px solid $base_color
  box-shadow: -4px -4px 8px rgba(255, 255, 255, 1), 4px 4px 8px rgba(0, 0, 0, 0.15)
  cursor: pointer
  outline: none
  user-select: none
  margin-top: 10px
  transition: .1s

  &:active
    box-shadow: -4px -4px 8px rgba(255, 255, 255, 1), 4px 4px 8px rgba(0, 0, 0, 0.15), 2px 2px 4px rgba(0,0,0,.15) inset

  .icon
    background-color: darken($base_color, 80)
    color: transparent
    text-shadow: 2px 2px 3px rgba(255,255,255,0.5)
    -webkit-background-clip: text
    -moz-background-clip: text
    background-clip: text

.box
  border-radius: 10px

.circle
  border-radius: 50%

.leaf
  border-top-left-radius: 15px
  border-bottom-right-radius: 15
</style>
