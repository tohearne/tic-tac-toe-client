'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = event => {
  console.log('sign up:' + event)
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(responseData => {
      event.target.reset()
      ui.onSignUpSuccess(responseData)
    })
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  console.log('sign in:' + event)
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signIn(formData)
    .then(responseData => {
      event.target.reset()
      ui.onSignInSuccess(responseData)
    })
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  console.log('change password:' + event)
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(responseData => {
      event.target.reset()
      ui.onChangePasswordSuccess(responseData)
    })
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  console.log('sign out:' + event)
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
