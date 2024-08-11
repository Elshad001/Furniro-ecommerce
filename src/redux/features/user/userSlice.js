import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: [],
  loading: false,
  error: '',
};

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId, { getState }) => {
    const { jwtToken } = getState().auth;
    try {
      const response = await axios.get(`https://immutable858-001-site1.atempurl.com/api/ApplicationUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      return response.data;

    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching data';
      });
  },
});

export default userSlice.reducer;
