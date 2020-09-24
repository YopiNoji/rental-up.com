// import * as React from 'react';
// import axios from 'axios';

// import { useProvider } from '../App/context';
// // import useAuth from './useAuth';



// const client = axios.create({
//   // baseURL: process.env.API_BASE_URL,
//   baseURL: 'https://www.google.com/',
// });

// const initialState = {
//   loading: false,
// };

// function reducer(state: { loding: boolean; }, { type, payload }: any) {
//   switch (type) {
//     case 'set':
//       return { ...state, ...payload };
//     case 'setLoading':
//       state.loding = true;
//       return { ...state };
//     case 'unsetLoading':
//       state.loding = false;
//       return { ...state };
//     default:
//       throw new Error('Action type not found');
//   }
// }

// export function useRequestReducer() {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
//   return {
//     state,
//     dispatch,
//   };
// }

// const useRequest = () => {
//   // const { state: userdata } = useAuth();
//   const {
//     request: { state, dispatch },
//   } = useProvider();
//   // const {
//   //   state: { tokenResult },
//   //   dispatch: authDispatch,
//   // } = useAuth()

//   // async function getToken() {
//   //   // トークン取得
//   //   return userdata.token ? userdata.token : '';
//   // }

//   async function request(config: { headers: any; }) {
//     // Please below to how can you config
//     // https://github.com/axios/axios#request-config
//     const reqConfig = { ...config, headers: config.headers || {} };

//     const token = await getToken();
//     reqConfig.headers.Authorization = `Bearer ${token}`;

//     dispatch({ type: 'setLoading' });
//     try {
//       const result = await client(reqConfig);
//       return result.data;
//     } catch (err) {
//       alert(err);
//       throw err;
//     } finally {
//       dispatch({ type: 'unsetLoading' });
//     }
//   }

//   return { state, dispatch, request, client };
// }

// export default useRequest
