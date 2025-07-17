import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalprice: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,actions) => {
        console.log(actions.payload);
        state.totalprice.push(actions.payload)
     
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
