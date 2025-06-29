import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: __DEV__ ? true : false, // Set to true in development mode for easier testing
  },
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
