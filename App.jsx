/* global React */
'use strict'

const React = require('react')

// Redux
const connect = require('react-redux').connect
// const actions = require('./actions')
const Dummy = require('./components/Dummy')

// Button
const {Container} = require('semantic-ui-react')

let App = ({selectedView}) => {
  return (
    <Container>
      <Dummy />
    </Container>
  )
}

const mapDispatchToProps = (dispatch, ownParams) => {
  return {
  }
}

const mapStateToProps = (state, ownParams) => {
  return {
    selectedView: state.ui.selectedView
  }
}

// Redux - needed for dispatch
App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

module.exports = App
