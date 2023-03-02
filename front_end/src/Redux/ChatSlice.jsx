import { createSlice } from "@reduxjs/toolkit";


const ChatSlice = createSlice({
    name:"chat",
    initialState: {
        id:2,
        chat:[{id:1,question:"hello ,can you help you",answer:"hy ,yeah sure tell me"}],
   
    },
    reducers :{
        Addchat : (state,action) => {
            state.humanchat=[...{id:state.id,question:action.payload.question,answer:action.payload.answer}];
            state.id=state.id+=1
        },

        
    }
})

export const {Addchat} = ChatSlice.actions
export default ChatSlice.reducer;