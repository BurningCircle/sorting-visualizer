import Vue from "vue"
import Vuex from "vuex"
import { sortTypes } from "@constants"
import sorting_methods from "./_sorting_actions"
import array_actions from "./_array_actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amount: null,
    array: [],
    current_items: [],
    isSorted: false,
    inProcess: true,
    stopSort: false,
    sortType: sortTypes.SELECTION,
    timeout: null
  },
  mutations: {
    set_amount: (state, amount) => (state.amount = amount),
    set_array: (state, array) => {
      state.array = []
      state.array = array
    },
    set_is_sorted: (state, isSorted) => (state.isSorted = isSorted),
    start_sort: state => {
      state.stopSort = false
      state.inProcess = true
    },
    stop_sort: state => {
      state.stopSort = true
      state.inProcess = false
    },
    set_in_process: (state, inProcess) => (state.inProcess = inProcess),
    set_timeout: (state, timeout) => state.timeout = timeout,
    set_array_item_value: (state, index, value) => (state.array[index] = value),
    set_current_items: (state, current_items) => {
      state.current_items = []
      state.current_items = current_items
    },
    set_timeouts: (state, timeouts) => (state.timeouts = timeouts),
    add_timeout: (state, timeout) => state.timeouts.push(timeout)
  },
  actions: {
    ...array_actions,
    ...sorting_methods
  },
  modules: {},
  getters: {
    array: state => state.array,
    amount: state => state.amount
  }
})
