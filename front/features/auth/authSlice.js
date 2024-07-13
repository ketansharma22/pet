import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const user=JSON.parse(localStorage.getItem('user'))

const initialState={
    user: user? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}

export const authSlice=createSlice({
    auth,
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false,
            state.isLoading=false,
            state.isSuccess=false,
            state.message=""
        },
    },
})