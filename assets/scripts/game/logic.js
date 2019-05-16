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
let nextLetter = ''

const store = require('../store')

const setNextLetter = () => {
  if (store.game.local) nextLetter = 'X'
  else {
    if (store.game.player_x.id === store.user.id) nextLetter = 'X'
    else nextLetter = 'O'
  }
}

const setSquare = index => {
  if (store.game.cells[index] === '') {
    store.game.cells[index] = nextLetter
    if (store.game.local) {
      store.game.lastMove = nextLetter
      if (nextLetter === 'X') nextLetter = 'O'
      else nextLetter = 'X'
    }
    return true
  } else return false
}

const checkWin = () => lines.some(line => line.every(index => {
  return store.game.cells[index] === store.game.cells[line[0]] && store.game.cells[line[0]] !== ''
}))

const checkTie = () => store.game.cells.every(index => index !== '')

module.exports = {
  setNextLetter,
  setSquare,
  checkWin,
  checkTie
}
