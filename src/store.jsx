// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/auth/authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer, // Add reducers here
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './utils/authSlice'
const store=configureStore({
    reducer:{
        auth:authReducer
    }
})
export default store