import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  productsData:[],
  singleProduct:{},
  relatedProducts:[],
  gridImages:[],
  isCardModalOpen:false,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({page,showMoreTake}) => {
    const response = await axios.get(`https://immutable858-001-site1.atempurl.com/api/UserProduct/Products?Page=${page}&ShowMore.Take=${showMoreTake}`);
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  'singleProduct/fetchSingleProduct',
  async (Id) => {
    console.log(Id)
    const response = await axios.get(`https://immutable858-001-site1.atempurl.com/api/UserProduct/getById/ProductPage?Id=${Id}`);
    return response.data;
  }
);


export const fetchGridImages = createAsyncThunk(
  'gridImages/fetchGridImages',
  async () => {
    const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Home');
    return response.data;
  }
);


export const fetchRelatedProducts = createAsyncThunk(
  'relatedProducts/fetchRelatedProducts',
  async (MainProductId) => {
    console.log(MainProductId);
    const response = await axios.get( `https://immutable858-001-site1.atempurl.com/api/UserProduct/RelatedProducts?Page=1&ShowMore.Take=4&MainProductId=${MainProductId}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    OpenCardModal(state) {
      state.isCardModalOpen = true;
  },
   CloseCardModal(state) {
      state.isCardModalOpen = false;
  },
  },
  extraReducers: (builder)=>{
   
    builder.addCase(fetchProducts.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase(fetchProducts.fulfilled, (state,action)=>
    {
      state.productsData = action.payload;
      state.loading=false;
    });
    builder.addCase(fetchProducts.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });

    builder.addCase( fetchSingleProduct.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase( fetchSingleProduct.fulfilled, (state,action)=>
    {
      console.log(action.payload);
      state.singleProduct = action.payload;
      state.loading=false;
    });
    builder.addCase( fetchSingleProduct.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });

    builder.addCase( fetchRelatedProducts.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase( fetchRelatedProducts.fulfilled, (state,action)=>
    {
      console.log(action.payload);
      state.relatedProducts = action.payload;
      state.loading=false;
    });
    builder.addCase( fetchRelatedProducts.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });

    builder.addCase( fetchGridImages.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase( fetchGridImages.fulfilled, (state,action)=>
    {
      console.log(action.payload);
      state.gridImages = action.payload;
      state.loading=false;
    });
    builder.addCase( fetchGridImages.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });
  },
});


export const { OpenCardModal ,CloseCardModal } = productsSlice.actions;
export default productsSlice.reducer;

