import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    wishLists: [],
  },
});


export default productsSlice.reducer