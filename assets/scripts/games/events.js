'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('New Game Created games/events.js')
  const form = event.target
  const getForm = getFormFields(form)
  api.createGame(getForm)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGameBtnClick = function (event) {
  event.preventDefault()
  console.log('Game Button Pressed games/events.js')
  const form = event.target
  const getForm = getFormFields(form)

  api.gameBtnClick(getForm)
    .then(ui.onGameBtnClickSuccess)
    .catch(ui.onGameBtnClickFailure)
}

module.exports = {
  onCreateGame,
  onGameBtnClick
}
