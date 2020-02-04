'use strict'

const config = require('./../config')
const store = require('./../store')

const createGame = function (data) {
  console.log(data)
  console.log('createGame games/api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const gameBtnClick = function (data) {
  console.log(data)
  console.log('this is my store api.js ', store.game)

  // // console.log(`/games/${store.game.id}`)
  // console.log(store.game.token)
  // console.log('gameBtnClick games/api.js')
  //
  // const gameCell =
  // const gameBoard = [ '','', '', '', '', '', '', '','']
  //
  // for(let i = 0; i < gameBoard.length; i++){
  //   if(i === )
  // }

  return $.ajax({
    url: config.apiUrl + `games/${store.game}`,
    method: 'PATCH',
    header: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}
// const changePassword = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  createGame,
  gameBtnClick
}
