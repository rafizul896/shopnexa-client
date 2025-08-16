import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartProduct extends IProduct {
  orderQuantity: number;
}

interface IinitialState {
  products: ICartProduct[];
}

const initialState: IinitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductInStore: (state, action) => {
      const isExistsProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isExistsProduct) {
        isExistsProduct.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const isExistsProduct = state.products.find(
        (product) => product._id === action.payload
      );

      if (isExistsProduct) {
        isExistsProduct.orderQuantity += 1;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const isExistsProduct = state.products.find(
        (product) => product._id === action.payload
      );

      if (isExistsProduct) {
        isExistsProduct.orderQuantity -= 1;
      }
    },
    removeProductFormCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearCartProducts: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProductInStore,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProductFormCart,
  clearCartProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
