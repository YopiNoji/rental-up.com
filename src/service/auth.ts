// /*
//  ** auth0 configuration for @auth0/auth0-spa-js
//  ** https://auth0.com/docs/libraries/auth0-spa-js
//  ** https://auth0.github.io/auth0-spa-js/
//  */

// import { Auth0Client } from '@auth0/auth0-spa-js'

// const auth0Client = new Auth0Client({
//   domain: process.env.AUTH0_DOMAIN,
//   client_id: process.env.AUTH0_CLIENT_ID,
//   redirect_uri: window.location.origin,
//   cacheLocation: 'localstorage',
// })

// async function login() {
//   await auth0Client.loginWithPopup({
//     redirect_uri: 'http://localhost:3000/',
//   })
//   // logged in. you can get the user profile like this:
//   const user = await getAuthUser()
//   return user
// }

// function logout() {
//   auth0Client.logout()
// }

// async function getAuthUser() {
//   const data = {}
//   data.isAuthenticated = await isAuthenticated()
//   if (data.isAuthenticated) {
//     data.user = await getUser()
//     data.token = await getAccessToken()
//     const JWT = await getIdToken()
//     data.idToken = JWT.__raw
//     window.localStorage.setItem('idToken', data.idToken)
//   }
//   return data
// }

// async function isAuthenticated() {
//   return await auth0Client.isAuthenticated()
// }
// async function getUser() {
//   return await auth0Client.getUser()
// }

// async function getAccessToken() {
//   return await auth0Client.getTokenSilently()
// }

// async function getIdToken() {
//   return await auth0Client.getIdTokenClaims()
// }

// const client = auth0Client
// export { client, login, logout, getAuthUser, isAuthenticated, getUser, getAccessToken, getIdToken }
