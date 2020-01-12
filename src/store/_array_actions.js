import { sortTypes } from "@constants"

export default {
  async generateRandomArray({ state, commit, dispatch }) {
    dispatch("stopSort")

    let $array = []

    for (let i = 0; i < state.amount; i++) {
      $array.push(Math.round(Math.random() * 1000))
    }

    commit("set_array", $array)
    commit("set_in_process", false)
    commit('set_is_sorted', false)
  },
  sortArray({ state, dispatch }) {
    if (state.isSorted || state.inProcess) {
      return
    }

    switch (state.sortType) {
      case sortTypes.BUBBLE:
        dispatch("bubleSort")
        break
      case sortTypes.SELECTION:
        dispatch("selectionSort")
        break
      default:
        break
    }
  },
  stopSort({ state, commit }) {
    commit("stop_sort")
    clearTimeout(state.timeout)
    commit("set_timeout", null)
    commit("set_current_items", [])
  }
}
