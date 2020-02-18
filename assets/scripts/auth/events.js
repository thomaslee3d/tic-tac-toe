'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const getForm = getFormFields(form)

  api.signUp(getForm)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target

  const getForm = getFormFields(form)

  api.signIn(getForm)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const getForm = getFormFields(form)


  api.changePassword(getForm)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()

  api.logOut()
    .then(ui.onLogOutSuccess)
    .catch(ui.onLogOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onLogOut
}
