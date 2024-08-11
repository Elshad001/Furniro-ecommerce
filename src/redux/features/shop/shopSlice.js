import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  productsData:{},
  categories:[],
  sizes:[],
  colors:[],
  tags:[],
}


export const fetchProductsData = createAsyncThunk(
  'productsData/fetchProductsData',
  async () => {
    const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/UserProduct/Products')
    
    return response.data;
    
  }
  
  );
  
  export const fetchCategories= createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Category/getAll');
      return response.data;
    }
  );

  export const fetchSizes= createAsyncThunk(
    'sizes/fetchSizes',
    async () => {
      const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Size/getAll');
      return response.data;
    }
  );

  export const fetchColors= createAsyncThunk(
    'colors/fetchColors',
    async () => {
      const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Color/getAll');
      return response.data;
    }
  );

  export const fetchTags= createAsyncThunk(
    'tags/fetchTags',
    async () => {
      const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Tag/getAll');
      return response.data;
    }
  );

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder)=>{
   
    builder.addCase(fetchCategories.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase(fetchCategories.fulfilled, (state,action)=>
    {
      state.categories = action.payload;
      state.loading=false;
    });
    builder.addCase(fetchCategories.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });

    builder.addCase(fetchProductsData.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase(fetchProductsData.fulfilled, (state,action)=>
    {
      state.productsData = action.payload;
      state.loading=false;
    });
    builder.addCase(fetchProductsData.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });

    builder.addCase(fetchSizes.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase(fetchSizes.fulfilled, (state,action)=>
    {
      state.sizes = action.payload;
      state.loading=false;
    });
    builder.addCase(fetchSizes.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });
   
    builder.addCase(fetchColors.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase(fetchColors.fulfilled, (state,action)=>
    {
      state.colors = action.payload;
      state.loading=false;
    });
    builder.addCase(fetchColors.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });

    builder.addCase(fetchTags.pending, (state,action)=>
    {
      state.loading = true;
      state.error=""
    });
    builder.addCase(fetchTags.fulfilled, (state,action)=>
    {
      state.tags = action.payload;
      state.loading=false;
    });
    builder.addCase(fetchTags.rejected, (state,action)=>
    {
      state.loading = false;
      state.error='error fetching data';
    });
  },
});



export default shopSlice.reducer;

