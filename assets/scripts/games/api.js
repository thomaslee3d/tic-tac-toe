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

// GET RID OF CONSOLE LOGS

const gameBtnClick = function (data) {
  const cell = store.cell
  const value = store.currentPlayer

  console.log('sending ajax cell ' + cell)
  console.log('sending ajax value ' + value)
  console.log(data)
  console.log('this is my store api.js ', store.game)

  // for(let i = 0; i < gameBoardArray.length; i++){
  //   if(i === )
  // }

  return $.ajax({
    url: config.apiUrl + `games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cell,
          value: value
        },
        over: false
      }
    }
  })
}

const userStats = function (data) {
  console.log(data)
  console.log('createGame games/api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      games: [
        {
          id: 1,
          cells: ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o'],
          over: true,
          player_x: {
            id: 1,
            email: store.user.email
          },
          player_o: null
        },
        {
          id: 2,
          cells: ['', '', '', '', '', '', '', '', ''],
          over: false,
          player_x: {
            id: 3,
            email: store.user.email
          },
          player_o: null
        }
      ]
    }
  })
}

module.exports = {
  createGame,
  gameBtnClick,
  userStats
}
