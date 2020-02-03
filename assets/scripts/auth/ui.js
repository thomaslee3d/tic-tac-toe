'use strict'

const store = require('./../store')

$('#gameBoard').hide()
$('#new-game').hide()

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' Signed Up!')
  $('#sign-up').trigger('reset')
  $('#message').addClass('message')
  $('#sign-up').hide()
  console.log(response)
}

const onSignUpFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('invalid sign up  attempt')
  console.log(response)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' Signed In')
  $('#user').text(response.user.email + ' Active User')
  $('#game-number').text('game-number')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#message').addClass('message')
  $('#new-game').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  console.log(response)
}

const onSignInFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('sign in failed')
  console.log(response)
}

const onChangePasswordSuccess = function (response) {
  $('#message').text(' Password Changed')
  $('#change-password').trigger('reset')
  $('#message').addClass('message')
}

const onCreateGameSuccess = function (reponse) {
  $('#createGame').trigger('reset')
  $('#gameBoard').show()
}

const onCreateGameFailure = function (response) {
  console.log('failed to create game')
}

const onGameBtnClickSuccess = function (response) {
  console.log('Game Button Click')
  let currentPlayer = 'x'
  $('.box').on('click', function (event) {
    console.log('click')
    $(event.target).text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
  })
}

const onGameBtnClickFailure = function (response) {
  console.log('Failed to Click')
}




module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onCreateGameSuccess,
  onCreateGameFailure,
  onGameBtnClickSuccess,
  onGameBtnClickFailure
}
