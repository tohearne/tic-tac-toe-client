'use strict'

const api = require('./api')
const config = require('../config')
const getFormFields = require('../../../lib/get-form-fields')
const logic = require('./logic')
const resourceWatcher = require('../../../lib/resource-watcher-0.1.0')
const store = require('../store')
const ui = require('./ui')

const onStartLocal = event => {
  event.preventDefault()
  api.startNewGame()
    .then(returnData => {
      ui.onStartGameSuccess(returnData)
      store.game.local = true
      logic.setNextLetter()
    })
    .catch(ui.onStartLocalFailure)
}

const onStartOnline = event => {
  event.preventDefault()
  api.startNewGame()
    .then(returnData => {
      ui.onStartGameSuccess(returnData)
      ui.onStartMultiplayer()
      store.game.local = false
      logic.setNextLetter()
      startGameWatcher()
    })
    .catch(ui.onStartOnlineFailure)
}

const onJoinGame = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  event.target.reset()
  api.joinGame(formData.game.id)
    .then(returnData => {
      ui.onStartGameSuccess(returnData)
      store.game.local = false
      logic.setNextLetter()
      startGameWatcher()
    })
    .catch(ui.onJoinGameFailure)
}

const onClickSquare = event => {
  event.preventDefault()
  const index = event.target.getAttribute('id')
  if (!store.game.local && store.game[`player_${store.game.nextMove.toLowerCase()}`].id !== store.user.id) {
    ui.onWrongTurn()
    return
  }
  if (logic.setSquare(index)) {
    ui.setSquareSuccess(index)
    if (logic.checkWin(store.game.lastMove, store.game)) {
      ui.onGameOver(false)
    } else if (logic.checkTie()) {
      ui.onGameOver(true)
    }
    api.updateGame(index)
      .then(() => {
        if (store.game.over) onGetGamesData()
      })
      .catch(() => {
        if (!store.game.local) ui.onGameError()
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

const onGoOnline = event => {
  event.preventDefault()
  ui.goOnline()
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

const startGameWatcher = () => {
  const gameWatcher = resourceWatcher(`${config.apiUrl}/games/${store.game.id}/watch`, {
    Authorization: `Token token=${store.user.token}`,
    timeout: 120
  })
  gameWatcher.on('change', function (data) {
    console.log(data)
    if (data.game) {
      api.getGameData(store.game.id)
        .then(returnData => {
          console.log(returnData)
          if (!store.game.player_o && returnData.game.player_o) {
            store.game.player_o = returnData.game.player_o
            ui.onPlayerJoin()
          } else if (!store.game.cells.every((cell, i) => cell === returnData.game.cells[i])) {
            const index = store.game.cells.findIndex((cell, i) => cell !== returnData.game.cells[i])
            store.game.cells = returnData.game.cells
            logic.nextLetter()
            ui.setSquareSuccess(index)
            if (returnData.game.over) {
              if (logic.checkWin(store.game.lastMove, store.game)) ui.onGameOver(false)
              else ui.onGameOver(true)
              gameWatcher.close()
            }
          }
        })
        .catch(() => {
          ui.onGameError()
          gameWatcher.close()
        })
    } else if (data.timeout) { // not an error
      ui.onGameError()
      gameWatcher.close()
    }
  })

  gameWatcher.on('error', function (e) {
    console.error('an error has occurred with the stream', e)
  })
}

module.exports = {
  onStartLocal,
  onStartOnline,
  onJoinGame,
  onClickSquare,
  onGameRestart,
  onMenuBack,
  onGoOnline,
  onGetGamesData
}
