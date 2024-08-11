import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async ({page,showMoreTake}) => {
    try {
      const response = await axios.get( `https://immutable858-001-site1.atempurl.com/api/Blog?Page=${page}&ShowMore.Take=${showMoreTake}`);
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);


export const fetchRecentPosts = createAsyncThunk(
  'recentPosts/fetchRecentPosts',
  async () => {
    try {
      const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Blog/recent-posts');
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

export const fetchBlogCategories = createAsyncThunk(
  'blogCategories/fetchBlogCategories',
  async () => {
    try {
      const response = await axios.get('https://immutable858-001-site1.atempurl.com/api/Blog/blog-categories');
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    recentPosts:[],
    blogCategories:[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loadingBlogs = true;
      state.errorBlogs = '';
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.loadingBlogs = false;
      state.errorBlogs = action.error.message;
    });

    builder.addCase(fetchRecentPosts.pending, (state) => {
      state.loadingSingleBlog = true;
      state.errorSingleBlog = '';
    });
    builder.addCase(fetchRecentPosts.fulfilled, (state, action) => {
      state.loadingSingleBlog = false;
      state.recentPosts = action.payload;
    });
    builder.addCase(fetchRecentPosts.rejected, (state, action) => {
      state.loadingSingleBlog = false;
      state.errorSingleBlog = action.error.message;
    });

    builder.addCase(fetchBlogCategories.pending, (state) => {
      state.loadingSingleBlog = true;
      state.errorSingleBlog = '';
    });
    builder.addCase(fetchBlogCategories.fulfilled, (state, action) => {
      state.loadingSingleBlog = false;
      state.blogCategories = action.payload;
    });
    builder.addCase(fetchBlogCategories.rejected, (state, action) => {
      state.loadingSingleBlog = false;
      state.errorSingleBlog = action.error.message;
    });
  },
});

export default blogsSlice.reducer;