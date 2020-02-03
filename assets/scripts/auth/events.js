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

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('New Game Created')
  const form = event.target
  const getForm = getFormFields(form)
  api.createGame(getForm)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGameBtnClick = function (event) {
  event.preventDefault()
  console.log('Game Button Pressed')
  const form = event.target
  const getForm = getFormFields(form)

  api.gameButtonClick(getForm)
    .then(ui.onGameBtnClickSuccess)
    .catch(ui.onGameBtnClickFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onCreateGame,
  onGameBtnClick
}
