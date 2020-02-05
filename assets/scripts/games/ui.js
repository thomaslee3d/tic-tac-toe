'use strict'

const store = require('./../store')

$('#gameBoard').hide()

const onCreateGameSuccess = function (response) {
  $('.user-message').text('New Game!')
  console.log('onCreateGameSuccess games/ui.js')
  store.game = response.game
  $('#game-number').text('game-number ' + store.game.id)
  $('#gameBoard').show()
  $('.col-4').text('$')
}

const onRefreshGameSuccess = function (user) {
  $('.user-message').text('New Game!')
  store.game = user.game
  console.log('onCreateGameSuccess games/ui.js')
  $('.col-4').text('$')
}
const onRefreshGameFailure = function () {
  console.log('Fail to Refresh')
}

const onCreateGameFailure = function () {
  console.log('failed to create game')
}

const onGameBtnClickSuccess = function (response) {
  store.game = response.game
  console.log('Game Button Click ui.js')
  console.log(response)
}

const onGameBtnClickFailure = function () {
  console.log('Failed to Click')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGameBtnClickSuccess,
  onGameBtnClickFailure,
  onRefreshGameSuccess,
  onRefreshGameFailure
}
