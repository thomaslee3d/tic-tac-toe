'use strict'

const store = require('./../store')



const onCreateGameSuccess = function (response) {
  $('#gameBoard').show()
  $('.user-message').text('New Game!')
  $('#gameBoard').trigger('reset')
  $('.col-4').text('')
  $('#game-number').text('game-number ' + api.userStats(getForm))
  store.game = response.game
  api.createGame(getForm)
}

const onRefreshGameSuccess = function (user) {
  $('.user-message').text('New Game!')
  store.game = user.game
  $('.col-4').text('')
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
