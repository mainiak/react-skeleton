'use strict'

const request = require('superagent')
const actions = require('../actions')

exports.fetch = (dispatch) => {
  return request
    .get('/api/dummy')
    .set('Accept', 'application/json')
    .then((res) => {
      let payload = res.body.hosts
      dispatch(actions.DUMMY(payload))
    }, (err) => {
      console.log('Fetching hosts failed', err)
    })
}
