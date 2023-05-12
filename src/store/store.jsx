import cartItems from "../data";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "change",

  initialState: { loadimg: false, cart: [...cartItems] },

  reducers: {
    add(state, action) {
      state.cart.map((a) => {
        if (a.id === action.payload.id) {
          a.amount = a.amount + 1;
        }
      });
    },

    clear(state, action) {
      state.cart.map((a) => {
        a.amount = 0;
      });
    },
    delet(state, action) {
      state.cart.map((a) => {
        if (a.id === action.payload.id) {
          if (a.amount > 0) {
            a.amount = a.amount - 1;
          }
        }
      });
    },
    remove(state, action) {
      const update = state.cart.filter((a) => {
        return a.id !== action.payload;
      });
      state.cart = update;
    },
  },
});

export const Store = configureStore({
  reducer: {
    change: slice.reducer,
  },
});

export const { delet, add, remove, clear} = slice.actions;
