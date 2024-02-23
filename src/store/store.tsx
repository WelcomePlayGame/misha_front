import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productsReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
import categoryReducer from "./CategorySlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  category: categoryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
