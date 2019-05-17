'use strict'

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const store = require('../store')

const setNextLetter = () => {
  if (store.game.local) store.game.nextMove = 'X'
  else {
    if (store.game.player_x.id === store.user.id) store.game.nextMove = 'X'
    else store.game.nextMove = 'O'
  }
}

const setSquare = index => {
  if (store.game.cells[index] === '') {
    store.game.cells[index] = store.game.nextMove
    if (store.game.local) {
      store.game.lastMove = store.game.nextMove
      if (store.game.nextMove === 'X') store.game.nextMove = 'O'
      else store.game.nextMove = 'X'
    }
    return true
  } else return false
}

const checkWin = (letter, game) => lines.some(line => line.every(index => game.cells[index] === letter))

const checkTie = () => store.game.cells.every(index => index !== '')

const storeFullGames = returnData => {
  store.user.fullGames = returnData.games.filter(game => game.over)
}

const countWins = (games) => {
  store.user.wins = games.filter(game => {
    if (game.player_x.id === store.user.id) return checkWin('X', game)
    else return checkWin('O', game)
  }).length
}

module.exports = {
  setNextLetter,
  setSquare,
  checkWin,
  checkTie,
  storeFullGames,
  countWins
}
