import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from './modules/noticeSlice' 
import customerReducer from './modules/customerSlice' 
import cartReducer from './modules/cartSlice' 


export const store = configureStore({
    reducer: {
       noticeR : noticeReducer,
       customerR : customerReducer,
       cartR : cartReducer

     
    }
})