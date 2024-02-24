import { createSlice } from "@reduxjs/toolkit";

export const smsSlice =createSlice({
    name: "smsSlice",

    initialState:{
        logdetails:[],
        userData:{
            email:"",
            unit_type:"",
        },

},
reducers:{

    setLogDetails(state,action){
        state.logdetails = action.payload
    },
    setUserData(state,action){
        state.userData.email = action.payload.email;
        state.userData.unit_type = action.payload.unit_type;

    }
},
});

export const {setLogDetails, setUserData} = smsSlice.actions;