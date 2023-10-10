
import {createSlice} from "@reduxjs/toolkit"

let no = 2
const initialState = {
   data: [{id:1, name:'구멈뭄', title:'멍멍멍',content:'멈뭉내용',date:'2023-7-10'}],
   current:{},

}

export const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        add(state,action){
            state.data.push({id:no++,...action.payload})
        },
        //최신순 정렬
        addSort(state,action){
            state.data.sort(function(a,b){
                if(a.id > b.id){
                    return -1;
                }
                if(a.value < b.value){
                    return 1;
                }
                return 0;
            });
        },
        remove(state,action){
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        edit(state,action){
            //디테일페이지에서 customer/id정보를 넘겨줌
            state.current = action.payload
        },
        update(state,action){
            state.data = state.data.map(item => item.id === action.payload.id ?
            action.payload : item)
        }
    }
})

export const {add,remove,edit,addSort,update} = customerSlice.actions
export default customerSlice.reducer