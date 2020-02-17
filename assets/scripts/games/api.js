'use strict'

const config = require('./../config')
const store = require('./../store')

const createGame = function (data) {

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

  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
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

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createGame,
  gameBtnClick,
  userStats
}
