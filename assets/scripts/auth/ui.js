'use strict'

const store = require('../store')

const onSignUpSuccess = (responseData) => {
  console.log('Signed up successfully!')
  console.log(responseData)
}

const onSignUpFailure = () => {
  console.log('Sign up failed!')
}

const onSignInSuccess = responseData => {
  console.log('Signed in successfully!')
  console.log(responseData)
  store.user = responseData.user
  $('.ui-login').addClass('disable')
  $('.ui-user').removeClass('disable')
  $('.game-select').removeClass('disable')
}

const onSignInFailure = () => {
  console.log('Sign in failed!')
}

const onChangePasswordSuccess = (responseData) => {
  console.log('Password changed successfully!')
  console.log(responseData)
}

const onChangePasswordFailure = () => {
  console.log('Failed to change password!')
}

const onSignOutSuccess = (responseData) => {
  console.log('Signed out successfully!')
  console.log(responseData)
  $('.ui-user').addClass('disable')
  $('.ui-login').removeClass('disable')
  $('.game-overlay').removeClass('disable')
  $('.game-ui').addClass('disable')
  $('.game-square').text('')
}

const onSignOutFailure = () => {
  console.log('Sign out failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
