import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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

      toast.success("item added to cart")
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
      toast.success("item removed from cart")
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
