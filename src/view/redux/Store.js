import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/Cartslice'


 export const store = configureStore({
reducer:{
    cart:cartReducer

}
})


