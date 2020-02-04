'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('error check')
  const form = event.target
  const getForm = getFormFields(form)

  api.signUp(getForm)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('error check')
  const form = event.target
  const getForm = getFormFields(form)

  api.signIn(getForm)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log(' Changed Password Successfully')
  const form = event.target
  const getForm = getFormFields(form)
  api.changePassword(getForm)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword
}
