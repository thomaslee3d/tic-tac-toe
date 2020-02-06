'use strict'

const store = require('./../store')

$('#gameBoard').hide()

const onCreateGameSuccess = function (response) {
  $('.user-message').text('New Game!')
  store.game = response.game
  $('#game-number').text('game-number ' + store.game.id)
  $('#gameBoard').show()
  $('.col-4').text('$')
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
