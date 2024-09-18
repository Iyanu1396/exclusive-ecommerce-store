import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    wishList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (!productExists) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    addToWishList: (state, action) => {
      const productExists = state.wishList.find(
        (item) => item.id === action.payload.id,
      );
      if (!productExists) {
        state.wishList.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addToCart, addToWishList, removeFromCart, removeFromWishList } =
  productsSlice.actions;

export default productsSlice.reducer;
