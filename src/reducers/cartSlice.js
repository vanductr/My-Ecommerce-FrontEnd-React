import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addItem: (state, action) => {
        console.log("Đã vào cartSlice: nơi xử lý Logic.");
        console.log("state của cartSlice: ");
        console.log(state);
        console.log("action của cartSlice: ");
        console.log(action);
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
