// src/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartSlice'; // Import từ slice thay vì reducer

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers
});

export default rootReducer;
