'use strict'

const config = require('../config')
const store = require('../store')

const startNewGame = () => $.ajax({
  url: `${config.apiUrl}/games`,
  method: 'POST',
  data: {},
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

const joinGame = (id) => $.ajax({
  url: `${config.apiUrl}/games/${id}`,
  method: 'PATCH',
  data: {},
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

const updateGame = index => $.ajax({
  url: `${config.apiUrl}/games/${store.game.id}`,
  method: 'PATCH',
  data: {
    game: {
      cell: {
        index: index,
        value: store.game.cells[index]
      },
      over: store.game.over
    }
  },
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

const getGameData = id => $.ajax({
  url: `${config.apiUrl}/games/${id}`,
  method: 'GET',
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

const getGamesData = () => $.ajax({
  url: `${config.apiUrl}/games`,
  method: 'GET',
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

module.exports = {
  startNewGame,
  joinGame,
  updateGame,
  getGameData,
  getGamesData
}
