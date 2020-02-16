'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameAuth = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#change-password').hide()
  $('.user-message').hide()
  $('.game-message').hide()
  $('#game-user').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#settings').hide()
  $('#log-out').hide()
  $('#gameBoard').hide()
  $('#game-number').hide()
  $('#sign-up').on('submit', gameAuth.onSignUp)
  $('#sign-in').on('submit', gameAuth.onSignIn)
  $('.box').on('click', gameEvents.onGameBtnClick)
  $('#new-game').on('submit', gameEvents.onCreateGame)
  $('#change-password').on('submit', gameAuth.onChangePassword)
  // $('.gameboard').on('click', (event) => {
  //   $(event.target).text('x')
  // })
})

// $('#change-password').on('submit', gameAuth.onChangePassword)
// $('#game-control').on('submit', gameEvents.onCreateGame)
// $('.box').on('click', gameEvents.onGameBtnClick)
// $('#log-out').on('submit', gameAuth.onLogOut)
