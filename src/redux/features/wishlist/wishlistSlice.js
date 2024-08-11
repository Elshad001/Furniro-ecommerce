import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  wishlistItems: [],
  loading: false,
  error: '',
  isCardWishlistOpen: false,
  successMessage: '',
};

export const fetchWishlistItems = createAsyncThunk(
    "wishlist/wishlistItems",
    async (UserId) => {
      console.log(UserId);
      try {
        const jwtToken  = localStorage.getItem('jwtToken');
      const response = await axios.get(`https://immutable858-001-site1.atempurl.com/api/Favorite?UserId=${UserId}`,{
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });
        return await response.data;
      } catch (error) {
        console.error(error);
      }
    }
  );
  
  export const fetchDeleteWishlistItem = createAsyncThunk(
    'deleteWishlistItem/fetchDeleteWishlistItem',
    async ({ userId,colorId,productId}) => {
      console.log(userId,colorId,productId);
      const jwtToken  = localStorage.getItem('jwtToken');
      try {
        const response = await axios.delete(`https://immutable858-001-site1.atempurl.com/api/Favorite`,
        {
          data: {
            userId: userId,
            colorId: colorId,
            productId: productId,
          },
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
  
  export const fetchAddToWishlist = createAsyncThunk(
    'addToWishlist/fetchAddToWishlist',
    async ({ userId,productId,colorId}) => {
      const jwtToken  = localStorage.getItem('jwtToken');
      try {
        const response = await axios.post('https://immutable858-001-site1.atempurl.com/api/Favorite', {
        userId,productId,colorId
         
        },
          {
  
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        return response.data;
      } catch (error) {
       
      }
    }
  );

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {

    openWishlistModal(state) {
      state.isCardWishlistOpen = true;
    },
    closeWishlistModal(state) {
      state.isCardWishlistOpen = false;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistItems.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        console.log(action.payload);
        state.wishlistItems = action.payload;
        state.loading = false;
      })
      .addCase(fetchWishlistItems.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching data';
      });

      builder.addCase(fetchAddToWishlist.pending, (state, action) => {
        state.loading = true;
        state.error = ""
      });
      builder.addCase(fetchAddToWishlist.fulfilled, (state, action) => {
        console.log(state.message)
        // if (action.payload.status) {
        //   state.successMessage = "Product added successfully";
        // }
      });
      builder.addCase(fetchAddToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = 'error fetching data';
      });
  },
});

export const { openWishlistModal, closeWishlistModal } = wishlistSlice.actions;
export default wishlistSlice.reducer;
