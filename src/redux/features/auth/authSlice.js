import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userId: 0,
  jwtToken: '',
  refreshToken: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData) => {
    try {
      const response = await axios.post('https://immutable858-001-site1.atempurl.com/api/ApplicationUser/CreateUser', userData);
      return response.data;
    } catch (err) {
      
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData) => {
    try {
      const response = await axios.post('https://immutable858-001-site1.atempurl.com/api/ApplicationUser/Login', userData);
      return response.data;
    } catch (err) {
      
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedOut: (state) => {
      state.loading = false;
        state.userId = 0;
        state.jwtToken = '';
        state.refreshToken = '';
        state.isLoggedIn = false;

        localStorage.setItem('userId', 0);
        localStorage.setItem('jwtToken', '');
        localStorage.setItem('refreshToken', '');
        localStorage.setItem('isLoggedIn', '');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
        state.jwtToken = action.payload.jwtToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = action.payload.isSuccess;
        
        localStorage.setItem('userId', action.payload.userId);
        localStorage.setItem('jwtToken', action.payload.jwtToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        localStorage.setItem('isLoggedIn', state.isLoggedIn);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {setLoggedIn} = authSlice.actions;
export default authSlice.reducer;