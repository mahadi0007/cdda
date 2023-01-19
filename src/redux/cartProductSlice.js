import { createSlice } from "@reduxjs/toolkit";

export const cartProductSlice = createSlice({
  name: "Cart-Product",
  initialState: {
    product: [],
    cartBagdeUpdate: false,
  },
  reducers: {
    //     setProduct: (state, action) => {
    //       state.product = action.payload;
    //     },
    //   },
    setProduct(state, action) {
      state.product.push(action.payload);

      //   if (!state.product.includes(action.payload)) {
      //     state.product.push(action.payload);
      //   }
    },
    deleteProduct(state, action) {
      state.product = action.payload;
    },
    setCartQuanUpdate(state, action) {
      state.cartBagdeUpdate = action.payload;
    },
  },
});

export const { setProduct, deleteProduct, setCartQuanUpdate } =
  cartProductSlice.actions;

export const selectProduct = (state) => state.cartProduct.product;
export const selectCartBagdeUpdate = (state) => state.cartProduct.product;

export default cartProductSlice.reducer;
