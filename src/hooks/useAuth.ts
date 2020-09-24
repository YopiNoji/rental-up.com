// import * as React from 'react'
// import { useProvider } from '@/App/context'
// import { client } from '@/service/auth'

// const initialState = {
//   token: null,
//   user: null,
//   initialChecked: false,
// }

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case 'set':
//       return { ...state, ...payload }
//     case 'setTokenResult':
//       return { ...state, tokenResult: payload }
//     default:
//       throw new Error('Action type not found')
//   }
// }

// export function useAuthReducer() {
//   const [state, dispatch] = React.useReducer(reducer, initialState)
//   return {
//     state,
//     dispatch,
//   }
// }

// export default function () {
//   const {
//     auth: { state, dispatch },
//   } = useProvider()

//   async function authChecked() {
//     const token = (await client.getIdTokenClaims()).__raw
//     const user = await client.getUser()

//     dispatch({ type: 'set', payload: { initialChecked: true, user, token } })
//   }

//   function setUser(payload) {
//     dispatch({ type: 'set', payload })
//   }

//   function unsetUser() {
//     dispatch({ type: 'set', payload: { user: null, tokenResult: null } })
//   }

//   async function getToken() {
//     return state.token
//   }

//   async function isLogin() {
//     return await client.isAuthenticated()
//   }

//   async function login() {
//     await client.loginWithPopup({
//       redirect_uri: 'http://localhost:3000/',
//     })
//   }

//   async function logout() {
//     await client.logout({
//       returnTo: '/sign-in',
//     })
//     location.assign('/sign-in')
//   }

//   return {
//     state: state,
//     dispatch: dispatch,
//     initialChecked: state.initialChecked,
//     isLogin,
//     login,
//     logout,
//     authChecked,
//     setUser,
//     unsetUser,
//     getToken,
//   }
// }
