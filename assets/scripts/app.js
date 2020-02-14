'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameAuth = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#change-password').hide()
  $('.user-message').text('tic tac toe')
  $('.game-message').text('game message')
  // $('.game-message').hide()
  $('#change-password').hide()
  // $('#new-game').hide()
  // $('#settings').hide()
  // $('#log-out').hide()
  $('#gameBoard').show()
  $('#sign-up').on('submit', gameAuth.onSignUp)
  $('#sign-in').on('submit', gameAuth.onSignIn)
  $('.box').on('click', gameEvents.onGameBtnClick)
  // $('.gameboard').on('click', (event) => {
  //   $(event.target).text('x')
  // })
})

// $('#change-password').on('submit', gameAuth.onChangePassword)
// $('#game-control').on('submit', gameEvents.onCreateGame)
// $('.box').on('click', gameEvents.onGameBtnClick)
// $('#log-out').on('submit', gameAuth.onLogOut)
