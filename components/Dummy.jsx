/* global React */
'use strict'
const React = require('react')

// Redux
const connect = require('react-redux').connect
const {Grid, Segment} = require('semantic-ui-react')

let Dummy = ({visible}) => {
  if (visible === false) {
    return null
  }

  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <Segment loading />
      </Grid.Column>
    </Grid.Row>
  )
}

const mapDispatchToProps = (dispatch, ownParams) => {
  return {
  }
}

const mapStateToProps = (state, ownParams) => {
  return {
    visible: state.ui.selectedView === 'dummy'
  }
}

// Redux - needed for dispatch
Dummy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy)

module.exports = Dummy
