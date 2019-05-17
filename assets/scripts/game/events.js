'use strict'

const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')
const store = require('../store')

const onStartLocal = event => {
  event.preventDefault()
  api.startNewGame()
    .then(returnData => {
      ui.resetBoard()
      ui.onStartLocalSuccess(returnData)
      logic.setNextLetter()
    })
    .catch(ui.onStartLocalFailure)
}

const onStartOnline = event => {
  event.preventDefault()
  api.startNewGame()
    .then(returnData => {
      ui.resetBoard()
      ui.onStartOnlineSuccess(returnData)
      logic.setNextLetter()
    })
    .catch(ui.onStartOnlineFailure)
}

const onClickSquare = event => {
  event.preventDefault()
  const index = event.target.getAttribute('data-tileId')
  if (logic.setSquare(index)) {
    ui.setSquareSuccess(event.target)
    if (logic.checkWin(store.game.lastMove, store.game)) {
      ui.onGameOver(false)
    } else if (logic.checkTie()) {
      ui.onGameOver(true)
    }
    api.updateGame(index)
      .then(() => {
        if (store.game.over) onGetGamesData()
      })
  } else ui.setSquareFailure()
}

const onGameRestart = event => {
  ui.resetBoard()
  if (store.game.local) onStartLocal(event)
  else onStartOnline(event)
}

const onMenuBack = event => {
  event.preventDefault()
  ui.menuBack()
}

const onGetGamesData = () => {
  api.getGamesData()
    .then(returnData => {
      logic.storeFullGames(returnData)
      logic.countWins(store.user.fullGames)
      ui.updateGamesData()
    })
    .catch()
}

module.exports = {
  onStartLocal,
  onStartOnline,
  onClickSquare,
  onGameRestart,
  onMenuBack,
  onGetGamesData
}
