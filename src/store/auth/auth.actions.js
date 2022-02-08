// External imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// Internal imports
import { provider } from '../../database/firebase';

// Async Actions
const auth = getAuth();

export const startGoogleLogIn = createAsyncThunk(
  'auth/googleLogin',
  async (_, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().auth;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return { token, user };
  }
);

export const startGoogleLogOut = createAsyncThunk(
  'auth/googleLogout',
  async (_, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().auth;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    await signOut(auth);
  }
);
