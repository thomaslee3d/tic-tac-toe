'use strict'

const store = require('./../store')
$('#change-password').hide()
$('#game-ctrl').hide()

const onSignUpSuccess = function (response) {
  $('.user-message').text(response.user.email + ' Signed Up!')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}

const onSignUpFailure = function (response) {
  $('.user-message').text('Failed Sign Up Attempt!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' Signed In')
  $('.user-message').text(' Active User : ' + response.user.email)
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#game-ctrl').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = function (response) {
  $('.user-message').text('Failed Sign In Attempt!')
}

const onChangePasswordSuccess = function (response) {
  $('.user-message').text(`Active user : ${response.user.email} - Has Updated Password`)
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function (response) {
  $('.user-message').text(`Active user : ${response.user.email} - Failed Password Update!`)
  $('#change-password').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
