'use strict'

const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let currentPlayer = 'x'
let cell = ''

const gameArray = ['', '', '', '', '', '', '', '', '']

const onCreateGame = function (event) {
  event.preventDefault()
  currentPlayer = 'x'
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

  console.log('submit - app.js')

  if ($(event.target).text() === '$') {
    $(event.target).text(currentPlayer)
    console.log($(event.target).text() + ' text value')
    if (currentPlayer === 'x') {
      store.currentPlayer = 'x'
      currentPlayer = 'o'
    } else if (currentPlayer === 'o') {
      store.currentPlayer = 'o'
      currentPlayer = 'x'
    }

    cell = $(event.target).attr('data-cell-index')
    store.cell = cell

    gameArray[cell] = currentPlayer

    console.log('game array : ' + gameArray)

    console.log('use value : ' + currentPlayer)
    console.log('cell # : ' + store.cell)

    api.gameBtnClick(getForm)
      .then(ui.onGameBtnClickSuccess)
      .catch(ui.onGameBtnClickFailure)
  }
}

module.exports = {
  onCreateGame,
  onGameBtnClick
}
