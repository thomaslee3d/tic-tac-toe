'use strict'

const store = require('./../store')

const onCreateGameSuccess = function (reponse) {
  $('#createGame').trigger('reset')
}

const onCreateGameFailure = function (response) {
  console.log('failed to create game')
}

const onGameBtnClickSuccess = function (response) {
  store.user = response.user
  console.log('Game Button Click ui.js')
}

const onGameBtnClickFailure = function (response) {
  console.log('Failed to Click')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGameBtnClickSuccess,
  onGameBtnClickFailure
}
