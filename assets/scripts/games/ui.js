'use strict'

const store = require('./../store')

const onCreateGameSuccess = function (response) {
  console.log('onCreateGameSuccess games/ui.js')
  $('#row h-100 board').hide()
  store.game = response.game
  $('#createGame').trigger('reset')
}

const onCreateGameFailure = function (response) {
  console.log('failed to create game')
}

const onGameBtnClickSuccess = function (response) {
  store.game = response.game
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
