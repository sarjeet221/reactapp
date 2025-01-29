import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        addToCart: (state, action) => {
            console.log("sliceeeeeeeeeeeeeeee", action.payload)
          const item = state.find((item) => item.id === action.payload.id);
          if (item) {
            item.quantity += 1;
          } else {
            state.push({ ...action.payload, quantity: 1 });
          }
        },
        removeFromCart: (state, action) => {
          return state.filter((item) => item.id !== action.payload);
        },
        clearCart: () => [],
      },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;