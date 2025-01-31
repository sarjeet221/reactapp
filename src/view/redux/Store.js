import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/Cartslice'
import flashReducer from '../redux/Flashmsgslice'


 export const store = configureStore({
reducer:{
    cart:cartReducer,
    flashmag:flashReducer,

}
})


