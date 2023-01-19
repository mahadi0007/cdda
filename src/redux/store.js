import { configureStore } from "@reduxjs/toolkit";

import cartProductSlice from "./cartProductSlice";

export default configureStore({
  reducer: {
    cartProduct: cartProductSlice,
  },
});
