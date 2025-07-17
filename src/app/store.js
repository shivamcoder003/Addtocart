import { configureStore } from '@reduxjs/toolkit'

import cartreducer from "../features/cart/Cartslice"


export const store = configureStore({
  reducer: {

    cart:cartreducer,
  },
})