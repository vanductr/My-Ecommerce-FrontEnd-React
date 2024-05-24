// src/reducers/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories, addCategory, updateCategory, deleteCategory } from '../api/categoryApi';

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async ({ page, size, sort }, { rejectWithValue }) => {
    try {
      const response = await fetchCategories(page, size, sort);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addCategoryAsync = createAsyncThunk(
  'categories/addCategory',
  async ({ categoryName, description }, { rejectWithValue }) => {
    try {
      const response = await addCategory(categoryName, description);
      return response.data.data; // Trả về dữ liệu danh mục mới
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return rejectWithValue({ message: 'Tên Danh mục đã tồn tại', httpStatus: 'CONFLICT' });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCategoryAsync = createAsyncThunk(
  'categories/updateCategory',
  async ({ categoryId, categoryName, description }, { rejectWithValue }) => {
    try {
      const response = await updateCategory(categoryId, categoryName, description);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  'categories/deleteCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      await deleteCategory(categoryId);
      return categoryId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    currentPage: 1,
    totalPages: 1,
    status: 'idle',
    error: null,
    totalElements: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.totalElements = action.payload.totalElements;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories.push(action.payload);
        state.totalElements += 1;
        state.totalPages = Math.ceil(state.totalElements / 5);
        state.currentPage = state.totalPages; // Chuyển đến trang cuối cùng
      })
      .addCase(addCategoryAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(updateCategoryAsync.fulfilled, (state, action) => {
        const index = state.categories.findIndex(cat => cat.categoryId === action.payload.categoryId);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
        state.status = 'succeeded';
      })
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.categories = state.categories.filter(cat => cat.categoryId !== action.payload);
        state.totalElements -= 1;
        state.totalPages = Math.ceil(state.totalElements / 5);
        state.status = 'succeeded';
      });
  },
});

export const { setCurrentPage } = categorySlice.actions;

export default categorySlice.reducer;
