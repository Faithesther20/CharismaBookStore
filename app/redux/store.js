import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/cart/userSlice";
import emailReducer from "./features/cart/emailSlice";

// import productsReducer from "./productsSlice";
// import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    email: emailReducer,
    // ui: uiReducer
  },
});

export default store;
