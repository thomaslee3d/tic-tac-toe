'use strict'

const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let currentPlayer = 'x'
let cell = ''
let gameArray = ['', '', '', '', '', '', '', '', '']
let gameOver = false

const onCreateGame = function (event) {
  event.preventDefault()
  currentPlayer = 'x'
  cell = ''
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('.game-message').text('')
  const form = event.target
  const getForm = getFormFields(form)
  api.createGame(getForm)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGameBtnClick = function (event) {
  event.preventDefault()
  const form = event.target
  const getForm = getFormFields(form)
  console.log('click')
  if ($(event.target).text() === '' && gameOver === false) {
    $(event.target).text(currentPlayer)
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

    if (gameArray[0] === currentPlayer && gameArray[1] === currentPlayer && gameArray[2] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[3] === currentPlayer && gameArray[4] === currentPlayer && gameArray[5] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[6] === currentPlayer && gameArray[7] === currentPlayer && gameArray[8] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[0] === currentPlayer && gameArray[3] === currentPlayer && gameArray[6] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[1] === currentPlayer && gameArray[4] === currentPlayer && gameArray[7] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[2] === currentPlayer && gameArray[5] === currentPlayer && gameArray[8] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[0] === currentPlayer && gameArray[4] === currentPlayer && gameArray[8] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else if (gameArray[2] === currentPlayer && gameArray[4] === currentPlayer && gameArray[6] === currentPlayer) {
      $('.game-message').text(`${switchPlayer(currentPlayer)} wins!`)
      gameOver = true
    } else {
      checkGameStatus(gameArray, currentPlayer)
    }

    api.gameBtnClick(getForm)
      .then(gameOver = false, ui.onGameBtnClickSuccess)
      .catch(ui.onGameBtnClickFailure)
  }
}

const checkGameStatus = function (array, player) {
  const activePlayer = player
  const gameBoardArray = array
  for (let i = 0; i < array.length; i++) {
    if (gameBoardArray.includes('')) {
      $('.game-message').text(`${activePlayer}'s Turn!'`)
    } else {
      $('.game-message').text('Draw !!!')
    }
  }
}

const switchPlayer = function (player) {
  if (player === 'x') {
    store.currentPlayer = 'x'
    player = 'o'
  } else if (currentPlayer === 'o') {
    store.currentPlayer = 'o'
    player = 'x'
  }
  return player
}

// const onRefreshGame = function (event) {
//   event.preventDefault()
//   currentPlayer = 'x'
//   cell = ''
//   gameArray = ['', '', '', '', '', '', '', '', '']
//   const form = event.target
//   const getForm = getFormFields(form)
//   api.gameBtnClick(getForm)
//     .then(ui.onRefreshGameSuccess)
//     .catch(ui.onRefreshGameFailure)
// }

const onWinEvent = function () {
  $('.game-message').text('New Game!')
  $('#gameBoard').show()
  $('.col-4').text('')
  $('#gameBoard').trigger('reset')
}

module.exports = {
  onCreateGame,
  onGameBtnClick
}
