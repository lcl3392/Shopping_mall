
import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  carts:[],
  cartTotal:0,
//카트 숫자
  count : 0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state,action){
            state.carts.push(action.payload)
            //주문하기 누르면 카드 숫자 올라감
        },
        removeCart(state, action){
            state.carts = state.carts.filter(item => item.id !== action.payload)
            // 주문하기 id가 일치해야함 
        }
        
    }
})

export const {addCart,removeCart} = cartSlice.actions
export default cartSlice.reducer