
'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
// This allows us to import the object that was exported
// in book/events. So we can use `onGetBooks`
const gameAuth = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', gameAuth.onSignUp)
  $('#sign-in').on('submit', gameAuth.onSignIn)
  $('#change-password').on('submit', gameAuth.onChangePassword)
  $('#new-game').on('submit', gameEvents.onCreateGame)
  $('.box').on('submit', gameEvents.onGameBtnClick)
  // $('.gameboard').on('click', (event) => {
  //   $(event.target).text('x')
  // })
  let currentPlayer = 'x'
  $('.box').on('click', function (event) {
    console.log('click - app.js')
    $(event.target).text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
  })
})
