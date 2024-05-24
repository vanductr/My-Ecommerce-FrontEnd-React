import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import productReducer from './reducers/productSlice';
import authReducer from './reducers/authSlice';
import categoryReducer from './reducers/categorySlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    auth: authReducer,
    categories: categoryReducer,
  },
});

export default store;
