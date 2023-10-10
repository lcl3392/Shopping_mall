import {createSlice} from "@reduxjs/toolkit"

const dataList =[
    {id:1, title:'게시글 제목1', content:'게시글 내용1', date:'2023-07-10'},
    {id:2, title:'게시글 제목1', content:'게시글 내용1', date:'2023-07-10'},
    {id:3, title:'게시글 제목1', content:'게시글 내용1', date:'2023-07-10'},
    {id:4, title:'게시글 제목1', content:'게시글 내용1', date:'2023-07-10'}
]
   
const initialState = {
    data:dataList
}


export const counterSlice = createSlice({
    name:'notice',
    initialState,
    reducers:{

    }
})

// export const {} = counterSlice.actions
export default counterSlice.reducer