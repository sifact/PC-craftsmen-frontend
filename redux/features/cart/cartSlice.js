import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product.category === newProduct.category
      );

      if (existingProductIndex !== -1) {
        // If a product with the same category already exists, replace it
        state.total -= state.products[existingProductIndex].price;
        state.products[existingProductIndex] = newProduct;
      } else {
        // Otherwise, add the new product to the state
        state.products.push(newProduct);
      }

      state.total += newProduct.price;
    },

    removeOne: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price;
    },
  },
});

export const { addToCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
