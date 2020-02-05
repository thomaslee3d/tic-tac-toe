'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameAuth = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', gameAuth.onSignUp)
  $('#sign-in').on('submit', gameAuth.onSignIn)
  $('#change-password').on('submit', gameAuth.onChangePassword)
  $('#new-game').on('submit', gameEvents.onCreateGame)
  $('.box').on('click', gameEvents.onGameBtnClick)
  $('#refresh-game').on('submit', gameEvents.onRefreshGame)
  // $('.gameboard').on('click', (event) => {
  //   $(event.target).text('x')
  // })
})
