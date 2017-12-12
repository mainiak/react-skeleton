'use strict'

const {applyMiddleware, createStore} = require('redux')
const promiseMiddleware = require('redux-promise')

const dummyUtils = require('./utils/dummy')
const rootReducer = require('./reducers')

const defaultState = {
  data: {
  },
  ui: {
    selectedView: 'dummy'
  }
}
exports.defaultState = defaultState

let reduxStorage = null
exports.reduxStorage = reduxStorage

exports.getState = () => {
  if (reduxStorage == null) {
    throw new Error('Storage not available - getState()')
  }
  return reduxStorage.getState()
}

exports.getDispatch = () => {
  if (reduxStorage == null) {
    throw new Error('Storage not available - getDispatch()')
  }
  return reduxStorage.dispatch
}

exports.createStore = (callback) => {
  reduxStorage = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(promiseMiddleware)
  )
  callback(null, reduxStorage)

  // load initial data
  dummyUtils.fetch(reduxStorage.dispatch)
}
