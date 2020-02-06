'use strict'

const store = require('./../store')

$('#gameBoard').hide()

const onCreateGameSuccess = function (response) {
  $('.game-message').text('New Game!')
  $('#gameBoard').show()
  $('.col-4').text('$')
  $('#gameBoard').trigger('reset')
  $('#game-number').text('game-number ' + response.game.id)
  store.game = response.game
}

const onRefreshGameSuccess = function (user) {
  $('.user-message').text('New Game!')
  store.game = user.game
  $('.col-4').text('$')
}

const onRefreshGameFailure = function () {

}

const onCreateGameFailure = function () {

}

const onGameBtnClickSuccess = function (response) {
  store.game = response.game
}

const onGameBtnClickFailure = function () {

}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGameBtnClickSuccess,
  onGameBtnClickFailure,
  onRefreshGameSuccess,
  onRefreshGameFailure

}
