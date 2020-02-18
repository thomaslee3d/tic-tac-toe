'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $("#game-number").show()
  $('.user-message').show()
  $('.user-message').text(response.user.email + ' Signed Up!')
  $('#sign-up-form').trigger('reset')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('.user-message').show()
  $('.user-message').text('Failed Sign Up Attempt!')
}

const onSignInSuccess = function (response) {
  store.user = response.user

  $('#game-user').show()
  $('.game-user').text(' Active User : ' + response.user.email)
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('.user-message').show()
  $('.user-message').text('Log In Success!')

  $('#game-number').text('game-num ' + response.user)
  $('.game-message').show()
  $('.game-message').text('Click New Game to Start')
  $('#new-game').show()
  $('#log-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
}

const onSignInFailure = function () {
  $('.user-message').show()
  $('.user-message').text('Failed Sign In Attempt!')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('.user-message').text(`Active user : Has Updated Password`)
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('.user-message').text(`Active user : Failed Password Update!`)
  $('#change-password').trigger('reset')
}

const onLogOutSuccess = function () {
  $('#game-user').hide()
  $('.user-message').show()
  $('.user-message').text('Logged Out')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#new-game').hide()
  $('#log-out').hide()
  $('#gameBoard').hide()
  $('.game-message').text('')
  $('#game-number').hide()
}

const onLogOutFailure = function () {
  $('.user-message').text('Failed to log out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onLogOutSuccess,
  onLogOutFailure
}
