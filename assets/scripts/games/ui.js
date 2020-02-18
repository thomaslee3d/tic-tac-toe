'use strict'

const store = require('./../store')

const onCreateGameSuccess = function (response) {
  $('#gameBoard').show()
  $('.user-message').text('New Game!')
  $('#gameBoard').trigger('reset')
  $('.col-4').text('')
  store.game = response.game
  $('#game-number').show()
  // $('#game-number').text("Game Number " + response.game.id)
}

// const onRefreshGameSuccess = function (user) {
//   $('.user-message').text('New Game!')
//   store.game = user.game
//   $('.col-4').text('')
// }
const updateGameNumber = function (response) {
  $('#game-number').text('Game Number ' + response.data.games.id)
}
const updateGameNumberFail = function () {
  $('#game-number').text('Game Number ?')
}

const onGameBtnClickSuccess = function (response) {
  store.game = response.game
}

const onGameBtnClickFailure = function () {
  $('.user-message').text('failed to')
}

module.exports = {
  onCreateGameSuccess,
  onGameBtnClickSuccess,
  onGameBtnClickFailure,
  updateGameNumber,
  updateGameNumberFail
}
