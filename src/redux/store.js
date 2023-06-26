//=============== Before ========================

// import { configureStore } from '@reduxjs/toolkit';

// import contactReducer from './contacts/contactsSlice';

// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// export const store = configureStore({
//   reducer: { contacts: contactReducer },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

//=============== After ========================

// import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './contacts/contactsSlice';
// import { filterReducer } from './contacts/filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });

//=============== After last homework ========================

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
