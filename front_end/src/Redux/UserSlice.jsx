import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"user",
    initialState: {
        username:null,
        isHere:false,
        Token:"fgdfgvdfv",
        firstName:null
    },
    reducers :{
        signin : (state,action) => {
            state.isHere=true;
            state.username=action.payload.username;
            state.Token=action.payload.token;
            state.firstName=action.payload.firstName;
        },
        signout : (state) => {
            state.isHere=false;
            state.username=null;
            state.Token=null;
        },
    }
})

export const {signin, signout} = UserSlice.actions
export default UserSlice.reducer;