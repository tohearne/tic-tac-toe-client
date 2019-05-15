'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => $.ajax({
  url: `${config.apiUrl}/sign-up`,
  method: 'POST',
  data: formData
})

const signIn = formData => $.ajax({
  url: `${config.apiUrl}/sign-in`,
  method: 'POST',
  data: formData
})

const changePassword = formData => $.ajax({
  url: `${config.apiUrl}/change-password`,
  method: 'PATCH',
  data: formData,
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

const signOut = formData => $.ajax({
  url: `${config.apiUrl}/sign-out`,
  method: 'DELETE',
  headers: {
    Authorization: `Token ${store.user.token}`
  }
})

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
