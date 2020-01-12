<template>
  <nav>
    <menu-button
      :iconName="'refresh'"
      :shape="'leaf'"
      :click="generateRandomArray"
    />
    <menu-button :iconName="'sort'" :shape="'box'" :click="setSortingMethod" />
    <menu-button
      :iconName="'directions_run'"
      :shape="'circle'"
      :click="sortArray"
    />
  </nav>
</template>

<script>
import { mapActions } from "vuex"
import MenuButton from "@components/buttons/MenuButton.vue"

export default {
  name: "app-menu",
  components: {
    "menu-button": MenuButton
  },
  methods: {
    ...mapActions(["generateRandomArray", "sortArray"]),
    setSortingMethod() {}
  }
}
</script>

<style lang="sass" scoped>
nav
  position: relative
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  padding-top: 10px
  align-items: center
</style>
