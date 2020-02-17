'use strict'

const store = require('./../store')
const api = ('./api')



const onCreateGameSuccess = function (response) {
  $('#gameBoard').show()
  $('.user-message').text('New Game!')
  $('#gameBoard').trigger('reset')
  $('.col-4').text('')
  store.game = response.game
  $('#game-number').show()
  $('#game-number').text("Game Number " + response.game.id)
}

const onRefreshGameSuccess = function (user) {
  $('.user-message').text('New Game!')
  store.game = user.game
  $('.col-4').text('')
}

const onGameBtnClickSuccess = function (response) {
  store.game = response.game
}

const onGameBtnClickFailure = function () {
  $('.user-message').text('failed to click')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGameBtnClickSuccess,
  onGameBtnClickFailure,
  onRefreshGameSuccess,
  onRefreshGameFailure

}
