'use strict'

const store = require('../store')

const onStartGameSuccess = (returnData) => {
  resetBoard()
  store.game = returnData.game
  $('.game-overlay').addClass('disable')
  $('.game-ui').addClass('disable')
  $('.game-x').addClass('x-turn')
  $('.game-o').removeClass('o-turn')
}

const onStartMultiplayer = () => {
  $('.game-overlay').removeClass('disable')
  $('.game-ui').addClass('disable')
  $('.game-waiting').removeClass('disable')
  $('#game-id').text(`Game ID: ${store.game.id}`)
}

const onPlayerJoin = () => {
  $('.game-overlay').addClass('disable')
  $('.game-ui').addClass('disable')
}

const onStartGameFailure = () => {
  console.log('Failed to start the game!')
}

const onJoinGameFailure = () => {
  $('.multiplayer-message').text('Failed to join game!').fadeIn(300).delay(3000).fadeOut(600)
}

const setSquareSuccess = (index) => {
  $(`#${index}`).text(store.game.cells[index])
  $(`.game-${store.game.lastMove.toLowerCase()}`).removeClass(`${store.game.lastMove.toLowerCase()}-turn`)
  $(`.game-${store.game.nextMove.toLowerCase()}`).addClass(`${store.game.nextMove.toLowerCase()}-turn`)
}

const setSquareFailure = () => {
  $('.game-message').text('Square already taken').fadeIn(100).delay(800).fadeOut(400)
}

const onWrongTurn = () => {
  $('.game-message').text('It is not your turn').fadeIn(100).delay(800).fadeOut(400)
}

const onGameOver = (boolTie) => {
  if (boolTie) {
    $('#game-over-text').text('Tie')
  } else {
    $('#game-over-text').text(`${store.game.lastMove} Wins!`)
    $(`.strike-${store.game.winningRow}`).removeClass('disable')
  }
  $('.game-overlay').removeClass('disable')
  $('.game-results').removeClass('disable')
  $(`.game-${store.game.nextMove.toLowerCase()}`).removeClass(`${store.game.nextMove.toLowerCase()}-turn`)
  store.game.over = true
}

const onGameError = () => {
  $('.game-overlay').removeClass('disable')
  $('.game-ui').addClass('disable')
  $('.game-error').removeClass('disable')
}

const resetBoard = () => {
  $('.game-square').text('')
}

const menuBack = () => {
  $('.game-ui').addClass('disable')
  $('.game-select').removeClass('disable')
}

const goOnline = () => {
  $('.game-ui').addClass('disable')
  $('.game-multiplayer').removeClass('disable')
}

const updateGamesData = () => {
  let totalGames = store.user.fullGames.length
  $('.games-played').text(`Games completed: ${store.user.fullGames.length}`)
  $('.games-won').text(`Games won: ${store.user.wins}`)
  if (totalGames === 0) totalGames = 1
  $('.games-percent').text(`Win rate: ${Math.round(store.user.wins / totalGames * 100)}%`)
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onJoinGameFailure,
  onStartMultiplayer,
  onPlayerJoin,
  setSquareSuccess,
  setSquareFailure,
  onWrongTurn,
  onGameOver,
  onGameError,
  resetBoard,
  menuBack,
  goOnline,
  updateGamesData
}
