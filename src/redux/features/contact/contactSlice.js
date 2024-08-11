import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  contactMessage: '',
  contactsData: []
};

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async ({ userId, name, email, subject, message }) => {
    const jwtToken = localStorage.getItem('jwtToken');
    try {
      const response = await axios.post('https://immutable858-001-site1.atempurl.com/api/ContactMessage',
        {
          userId: userId,
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        {
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

export const fetchContactsData = createAsyncThunk(
  'contactsData/fetchContactsData',
  async () => {
    const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Contact');
    return response.data;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {

    builder.addCase(fetchContact.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      console.log(action.payload);
      state.contactMessage = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchContact.rejected, (state) => {
      state.loading = false;
      state.error = 'Error fetching data';
    });

    builder.addCase(fetchContactsData.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    builder.addCase(fetchContactsData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.contactsData = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchContactsData.rejected, (state) => {
      state.loading = false;
      state.error = 'Error fetching data';
    });

  },
});

export default contactSlice.reducer;
