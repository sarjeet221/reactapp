import { createSlice } from "@reduxjs/toolkit";

const flashslice = createSlice({
name:"flashmsg",
initialState: {
    msg: "no message",
    view: false, // Boolean to track visibility
  },
reducers:{
    setMsg:(state, action)=>{
        state.msg = action.payload
        state.view = true
        console.log("this is conssosle sssssssssssss", action.payload)
    },
    clearMsg: (state) => {
        state.msg = "";
        state.view = false; // Hide message
      },
}

})

export const {setMsg, clearMsg} = flashslice.actions;
export default flashslice.reducer;