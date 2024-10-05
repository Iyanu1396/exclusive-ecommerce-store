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
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find(item => item.id === id);
      if (product) {
        product.quantity = quantity;
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

export const { addToCart, addToWishList, removeFromCart, removeFromWishList , updateCartQuantity} =
  productsSlice.actions;

export default productsSlice.reducer;
