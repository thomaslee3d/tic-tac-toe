'use strict'

const store = require('./../store')
$('#gameBoard').hide()
const onCreateGameSuccess = function (response) {
  console.log('onCreateGameSuccess games/ui.js')
  store.game = response.game
  $('#gameBoard').show()
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
