import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, size }) => {
    const response = await axios.get(`http://localhost:8080/api.myservice.com/v1/products?page=${page}&size=${size}`);
    return response.data.data; // Lấy dữ liệu từ response
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.content.map(product => ({
          id: product.productId,
          name: product.productName,
          price: product.unitPrice,
          description: product.description,
          image: product.image,
          category: product.category,
          rating: 4, // hoặc một logic để tính toán rating nếu có
          stockQuantity: product.stockQuantity,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        }));
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setCurrentPage } = productSlice.actions;

export default productSlice.reducer;
