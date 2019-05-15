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
