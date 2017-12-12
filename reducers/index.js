'use strict'

module.exports = function (state, action) {
  let newState = null

  switch (action.type) {
    case 'DUMMY':
      newState = Object.assign({}, state)
      newState.ui.selectedView = action.payload
      return newState

    default:
      console.log(action.type) // XXX
      return state
  }
}
