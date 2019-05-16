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

module.exports = {
  startNewGame,
  updateGame
}
