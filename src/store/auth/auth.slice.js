// External imports
import { createSlice } from '@reduxjs/toolkit';

// Local imports
import { startGoogleLogIn, startGoogleLogOut } from './auth.actions';
import { LocalStorageService } from '../../services/index';

// Initialization of state
const {
  isAuth = false,
  user = null,
  accessToken = null,
  themeMode = 'light',
} = LocalStorageService.get('auth') || {};

export const INITIAL_STATE = {
  isAuth: isAuth,
  userAuth: user,
  accessToken: accessToken,
  themeMode: themeMode,
  currentRequestId: undefined,
  loading: 'idle',
  error: null,
};

// Authentication slice definition
const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    handleLoginSuccess: (state, action) => {
      const { token, user } = action.payload.payload;
      state.isAuth = true;
      state.userAuth = user;
      state.accessToken = token;

      LocalStorageService.set('auth', {
        isAuth: true,
        user: user,
        accessToken: token,
      });
    },
    handleLoginFailure: (state, action) => {
      state.isAuth = false;
      LocalStorageService.remove('auth');
      state.error = action.payload.payload;
    },
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startGoogleLogIn.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(startGoogleLogIn.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
        }
      })
      .addCase(startGoogleLogOut.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(startGoogleLogOut.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
          state.isAuth = false;
          state.userAuth = null;
          state.accessToken = null;
          LocalStorageService.remove('auth');
        }
      });
  },
});

export const { handleLoginSuccess, handleLoginFailure, setThemeMode } =
  authSlice.actions;

export const selectUserThemeMode = (state) => state.auth.themeMode;
export const selectUserAthStatus = (state) => state.auth.isAuth;
export const selectUserAuth = (state) => state.auth.userAuth;
export const selectUserToken = (state) => state.auth.accessToken;

export default authSlice.reducer;
