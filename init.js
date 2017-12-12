'use strict'

function init () {
  const React = require('react')
  const ReactDOM = require('react-dom')
  const createStore = require('./storage').createStore

  // Redux
  const Provider = require('react-redux').Provider

  // https://facebook.github.io/react/docs/thinking-in-react.html
  const App = require('./App')
  const targetElm = document.getElementById('container')

  createStore((err, store) =>
    err
    ? ReactDOM.render('Loading error', targetElm)
    : ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      targetElm
    )
  )
}

// http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the
document.addEventListener('DOMContentLoaded', init, false)
