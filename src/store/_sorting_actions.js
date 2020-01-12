// TODO хуевые алгоритмы, надо будет переделать
export default {
  bubleSort({ state, commit, dispatch }) {
    commit("start_sort")

    let $array = [...state.array]
    let i = 0
    let j = 0

    nextIteration()

    function nextIteration() {
      if (j > $array.length - i - 1) {
        j = 0
        i++
      }
      if (i < $array.length || !state.stopSort) {
        if ($array[j] > $array[j + 1]) {
          let $tmp = $array[j]
          $array[j] = $array[j + 1]
          $array[j + 1] = $tmp
          commit("set_array", $array)
          commit("set_current_items", [j, j + 1])
        }

        j++
        let timeout = setTimeout(nextIteration, 5)
        commit("set_timeout", timeout)
      } else {
        commit("set_is_sorted", true)
        commit("set_in_process", false)
        dispatch("stopSort")
      }
    }
  },
  selectionSort({ state, commit, dispatch }) {
    commit("start_sort")

    let $array = [...state.array]
    let $temp
    let i = 0,
      j = 1,
      $minIdx = 0

    nextIteration()

    function nextIteration() {
      if (i < $array.length) {
        if ($array[j] < $array[$minIdx]) {
          commit("set_current_items", [j, $minIdx])
          $minIdx = j
        } else {
          commit("set_current_items", [j])
        }
        j++
        let timeout = setTimeout(nextIteration, 5)
        commit("set_timeout", timeout)
      } else {
        commit("set_is_sorted", true)
        commit("set_in_process", false)
        dispatch("stopSort")
      }

      if (j >= $array.length) {
        $temp = $array[i]
        $array[i] = $array[$minIdx]
        $array[$minIdx] = $temp
        commit("set_array", $array)
        commit("set_current_items", [i, $minIdx])
        i++
        j = i + 1
        $minIdx = i
      }
    }
  }
}
