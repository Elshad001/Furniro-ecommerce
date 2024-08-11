import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCartItems = createAsyncThunk(
  "cart/cartItems",
  async (userId,{getState}) => {
    
    try {
      const { jwtToken } = getState().auth;
    const response = await axios.get(`https://immutable858-001-site1.atempurl.com/api/Cart/getAllCartItems/${userId}`,{
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


export const fetchAddToCart = createAsyncThunk(
  'addToCart/fetchAddToCart',
  async ({ productId,colorId,userId,count },{getState}) => {
    const { jwtToken } = getState().auth;
    try {
      const response = await axios.post('https://immutable858-001-site1.atempurl.com/api/Cart/addToCart', {
        productId,colorId,userId,count
       
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

export const fetchDeleteCartItem = createAsyncThunk(
  'deleteCartItem/fetchDeleteCartItem',
  async ({ userId,colorId,productId}) => {
    console.log(userId,colorId,productId);
    const jwtToken  = localStorage.getItem('jwtToken');
    try {
      const response = await axios.delete(`https://immutable858-001-site1.atempurl.com/api/Cart/remove`,
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




const initialState = {
  cartData: [],
  isCartSidebarOpen: false,
  error:'',
  success: false,
  successMessage: '',
  deleteItem: false,
  deleteItemMessage: '',
  quantity: 1,
  selectedColor:{}
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    openCartSidebar(state) {
      state.isCartSidebarOpen = true;
    },
    closeCartSidebar(state) {
      state.isCartSidebarOpen = false;
    },
    increaseQuantity(state) {
      state.quantity++;
    },
    decreaseQuantity(state) {
      if(state.quantity>1)
      state.quantity--;
    },
    setSelectedColor(state,action){
      console.log(action.payload);
      state.selectedColor = action.payload;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(fetchCartItems.pending, (state, action) => {
      state.loading = true;
      state.error = ""
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cartData = action.payload;
      state.loading = false;
      localStorage.setItem('cartData', JSON.stringify(action.payload));
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(fetchAddToCart.pending, (state, action) => {
      state.loading = true;
      state.error = ""
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.success===true) {
        state.success=action.payload.success
        state.successMessage = action.payload.message;
      }
    });
    builder.addCase(fetchAddToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = 'error fetching data';
    });

    builder.addCase(fetchDeleteCartItem.pending, (state, action) => {
      state.loading = true;
      state.error = ""
    });
    builder.addCase(fetchDeleteCartItem.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.success===true) {
        console.log(action.payload)
        state.deleteItem=action.payload.success
        state.deleteItemMessage = action.payload.message;
      }
    });
    builder.addCase(fetchDeleteCartItem.rejected, (state, action) => {
      state.loading = false;
      state.error = 'error fetching data';
    });
  },
})


export const { openCartSidebar, closeCartSidebar ,increaseQuantity ,decreaseQuantity ,setSelectedColor} = cartSlice.actions;
export default cartSlice.reducer