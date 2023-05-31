import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { bookId } = payload;
      const existingItem = state.find((item) => item.bookId === bookId);

      if (!existingItem) {
        state.push({
          ...payload,
          orderQuantity: 1,
        });
      } else {
        existingItem.orderQuantity += 1;
      }
    },
    increment(state, { payload }) {
      state.forEach((item) => {
        if (item.bookId === payload) {
          item.orderQuantity += 1;
        }
      });
    },
    decrement(state, { payload }) {
      state.forEach((item) => {
        if (item.bookId === payload) {
          item.orderQuantity -= 1;
        }
      });
    },
    removeItem(state, { payload }) {
      const itemId = payload;
      const newItems = state.filter((item) => item.bookId !== itemId);
      return newItems;
    },
    clear() {
      return [];
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clear } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
