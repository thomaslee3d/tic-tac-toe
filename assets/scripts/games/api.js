'use strict'

const config = require('./../config')
const store = require('./../store')

const createGame = function (data) {
  console.log(data)
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
  return $.ajax({
    url: config.apiUrl + `/games/:${store.user.ID}`,
    method: 'PATCH',
    header: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createGame,
  gameBtnClick
}
