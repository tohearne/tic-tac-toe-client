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
  store.game.nextMove = 'X'
}

const nextLetter = () => {
  store.game.lastMove = store.game.nextMove
  if (store.game.nextMove === 'X') store.game.nextMove = 'O'
  else store.game.nextMove = 'X'
}

const setSquare = index => {
  if (store.game.cells[index] === '') {
    store.game.cells[index] = store.game.nextMove
    nextLetter()
    return true
  } else return false
}

const checkWin = (letter, game) => lines.some((line, index) => {
  if (line.every(index => game.cells[index] === letter)) {
    if (store.game) store.game.winningRow = index
    return true
  } else return false
})

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
  nextLetter,
  setSquare,
  checkWin,
  checkTie,
  storeFullGames,
  countWins
}
