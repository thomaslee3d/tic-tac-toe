
'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
// This allows us to import the object that was exported
// in book/events. So we can use `onGetBooks`
const gameEvents = require('./auth/events')
$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#new-game').on('submit', gameEvents.onCreateGame)
  $('#col-4 box').on('submit', gameEvents.onGameBtnClick)
})
