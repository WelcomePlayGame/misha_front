import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<any>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
