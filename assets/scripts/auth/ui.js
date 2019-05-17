'use strict'

const store = require('../store')

const messageFadeIn = 300
const messageDurration = 3000
const messageFadeOut = 400

const onSignUpSuccess = () => {
  $('.login-message').text('Signed Up!').removeClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onSignUpFailure = () => {
  $('.login-message').text('Sign-up Failed!').addClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  $('.ui-login').addClass('disable')
  $('.ui-user').removeClass('disable')
  $('.game-select').removeClass('disable')
  $('.navbar-toggler').addClass('user-info')
  $('.login-message').text('Signed In!').removeClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onSignInFailure = () => {
  $('.login-message').text('Sign-in Failed!').addClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onChangePasswordSuccess = () => {
  $('.login-message').text('Password Changed!').removeClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onChangePasswordFailure = () => {
  $('.login-message').text('Failed to Change Password!').addClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onSignOutSuccess = () => {
  $('.ui-user').addClass('disable')
  $('.ui-login').removeClass('disable')
  $('.game-overlay').removeClass('disable')
  $('.game-ui').addClass('disable')
  $('.navbar-toggler').removeClass('user-info')
  $('.game-square').text('')
  $('.login-message').text('Signed Out!').removeClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
}

const onSignOutFailure = () => {
  $('.login-message').text('Failed to Sign-out?').addClass('failed').fadeIn(messageFadeIn).delay(messageDurration).fadeOut(messageFadeOut)
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
