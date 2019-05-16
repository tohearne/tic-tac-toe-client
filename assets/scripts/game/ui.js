'use strict'

const store = require('../store')

const onStartLocalSuccess = (responseData) => {
  console.log('Started a local game successfully!')
  store.game = responseData.game
  store.game.local = true
  $('.game-overlay').addClass('disable')
  $('.game-ui').addClass('disable')
}

const onStartLocalFailure = () => {
  console.log('Failed to start a new game!')
}

const onStartOnlineSuccess = responseData => {
  console.log('Started an online game successfully!')
  store.game = responseData.game
  store.game.local = false
  $('.game-overlay').addClass('disable')
  $('.game-ui').addClass('disable')
}

const onStartOnlineFailure = () => {
  console.log('Failed to start an online game!')
}

const setSquareSuccess = (square) => {
  console.log('Square set successfully!')
  square.innerHTML = store.game.cells[square.getAttribute('data-tileId')]
}

const setSquareFailure = () => {
  console.log('Failed to set square!')
}

const onGameOver = (boolTie) => {
  if (boolTie) {
    $('#game-over-text').text('Tie')
    console.log(`Game Over! - Tie`)
  } else {
    $('#game-over-text').text(`${store.game.lastMove} Wins!`)
    console.log(`Game Over! - ${store.game.lastMove} Wins!`)
  }
  $('.game-overlay').removeClass('disable')
  $('.game-results').removeClass('disable')
  store.game.over = true
}

const resetBoard = () => {
  console.log('Board is reset')
  $('.game-square').text('')
}

const menuBack = () => {
  $('.game-ui').addClass('disable')
  $('.game-select').removeClass('disable')
}

module.exports = {
  onStartLocalSuccess,
  onStartLocalFailure,
  onStartOnlineSuccess,
  onStartOnlineFailure,
  setSquareSuccess,
  setSquareFailure,
  onGameOver,
  resetBoard,
  menuBack
}
