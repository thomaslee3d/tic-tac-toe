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
  $('#game-number').text(store.id)
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
