import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IinitialState {
  products: IProduct[];
}

const initialState: IinitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductInStore: (state, action) => {
      state.products.push(action.payload);
    },
  },
});


export const { addProductInStore } = cartSlice.actions;
export default cartSlice.reducer;
