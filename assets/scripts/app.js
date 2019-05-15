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
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.game-square').on('click', event => {
    event.preventDefault()
    console.log(event)
  })
})
