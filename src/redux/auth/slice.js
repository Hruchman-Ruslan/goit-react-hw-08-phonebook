import { logIn, logOut, refreshUser, register } from './opetations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggenIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggenIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggenIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggenIn = true;
      state.isRefreshing = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
