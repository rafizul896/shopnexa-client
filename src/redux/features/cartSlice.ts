import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ICartProduct extends IProduct {
  orderQuantity: number;
}

interface IinitialState {
  products: ICartProduct[];
  city: string;
  shippingAddress: string;
}

const initialState: IinitialState = {
  products: [],
  city: "",
  shippingAddress: "",
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
      state.city = "";
      state.shippingAddress = "";
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

// payment related
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product: ICartProduct) => {
    if (product?.offerPrice) {
      return acc + product.offerPrice * product.orderQuantity;
    } else {
      return acc + product.price * product.orderQuantity;
    }
  }, 0);
};

//* Address
export const citySelector = (state: RootState) => {
  return state.cart.city;
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

// For Order confirm
export const orderConfirmSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product) => ({
      product: product._id,
      color: "white",
      quantity: product.orderQuantity,
    })),
    shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
    paymentMethod: "Online",
  };
};

export const shippingCostSelector = (state: RootState) => {
  if (
    state.cart.city &&
    state.cart.city === "Dhaka" &&
    state.cart.products.length
  ) {
    return 60;
  } else if (
    state.cart.city &&
    state.cart.city !== "Dhaka" &&
    state.cart.products.length
  ) {
    return 120;
  } else {
    return 0;
  }
};

export const {
  addProductInStore,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProductFormCart,
  clearCartProducts,
  updateCity,
  updateShippingAddress,
} = cartSlice.actions;
export default cartSlice.reducer;
