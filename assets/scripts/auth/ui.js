'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('.user-message').text(response.user.email + ' Signed Up!')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}

const onSignUpFailure = function (response) {
  $('#sign-up').trigger('reset')
  $('.user-message').text('Failed Sign Up Attempt!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' Signed In')
  $('.user-message').text(' Active User : ' + response.user.email)
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#change-password').show()
  $('#log-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#new-game').show()
}

const onSignInFailure = function (response) {
  $('.user-message').text('Failed Sign In Attempt!')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('.user-message').text(`Active user : Has Updated Password`)
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function (response) {
  $('.user-message').text(`Active user : Failed Password Update!`)
  $('#change-password').trigger('reset')
}

const onLogOutSuccess = function (response) {
  $('.user-message').text('Logged Out')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#new-game').hide()
  $('#log-out').hide()
}

const onLogOutFailure = function (response) {
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
