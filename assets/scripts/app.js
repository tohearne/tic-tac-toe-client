'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-out').on('click', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('#start-local').on('click', gameEvents.onStartLocal)
  $('#start-online').on('click', gameEvents.onStartOnline)
  $('.game-square').on('click', gameEvents.onClickSquare)
  $('#start-rematch').on('click', gameEvents.onGameRestart)
  $('.button-back').on('click', gameEvents.onMenuBack)
//  $('.user-info').on('click', gameEvents.onGetGamesData)
})
