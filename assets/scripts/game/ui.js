'use strict'

const store = require('../store')

const onStartLocalSuccess = (responseData) => {
  store.game = responseData.game
  store.game.local = true
  $('.game-overlay').addClass('disable')
  $('.game-ui').addClass('disable')
  $('.game-x').addClass('x-turn')
}

const onStartLocalFailure = () => {
  console.log('Failed to start a new game!')
}

const onStartOnlineSuccess = responseData => {
  store.game = responseData.game
  store.game.local = false
  $('.game-overlay').addClass('disable')
  $('.game-ui').addClass('disable')
}

const onStartOnlineFailure = () => {
  console.log('Failed to start an online game!')
}

const setSquareSuccess = (square) => {
  square.innerHTML = store.game.cells[square.getAttribute('data-tileId')]
  $(`.game-${store.game.lastMove.toLowerCase()}`).removeClass(`${store.game.lastMove.toLowerCase()}-turn`)
  $(`.game-${store.game.nextMove.toLowerCase()}`).addClass(`${store.game.nextMove.toLowerCase()}-turn`)
}

const setSquareFailure = () => {
  $('.game-message').text('Square already taken').fadeIn(100).delay(800).fadeOut(400)
}

const onGameOver = (boolTie) => {
  if (boolTie) {
    $('#game-over-text').text('Tie')
  } else {
    $('#game-over-text').text(`${store.game.lastMove} Wins!`)
  }
  $('.game-overlay').removeClass('disable')
  $('.game-results').removeClass('disable')
  $(`.game-${store.game.nextMove.toLowerCase()}`).removeClass(`${store.game.nextMove.toLowerCase()}-turn`)
  store.game.over = true
}

const resetBoard = () => {
  $('.game-square').text('')
}

const menuBack = () => {
  $('.game-ui').addClass('disable')
  $('.game-select').removeClass('disable')
}

const updateGamesData = () => {
  let totalGames = store.user.fullGames.length
  $('.games-played').text(`Games completed: ${store.user.fullGames.length}`)
  $('.games-won').text(`Games won: ${store.user.wins}`)
  if (totalGames === 0) totalGames = 1
  $('.games-percent').text(`Win rate: ${Math.round(store.user.wins / totalGames * 100)}%`)
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
  menuBack,
  updateGamesData
}
