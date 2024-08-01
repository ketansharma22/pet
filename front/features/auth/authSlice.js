import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { registering } from "./services";
import axios from "axios";
import toast from "react-hot-toast";
const user=JSON.parse(localStorage.getItem('user'))

export const register=createAsyncThunk('auth/register',
async(userData,thunkAPI)=>{
    try {
        console.log(userData);
        console.log("slice");
        const res = await axios.post("/users/signup", userData);
        const data=await res.data
        return data
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
}
)


// export const authSlice=createSlice({
//     name:"auth",
//     initialState,
//     reducers:{},
//     extraReducers:builder=>{
//         builder.addCase(register.pending,(state)=>{
//             state.error=null,
//             state.isLoading=true,
//             state.isSuccess=false,
//             state.message=""

//         }),
//         builder.addCase(register.fulfilled,(state,action)=>{
//             state.error=null,
//             state.isLoading=false,
//             state.isSuccess=true,
//             state.message="helo",
//             state.user=action.payload                                               

//         }),
//         builder.addCase(register.rejected,(state)=>{
//             state.error="error",
//             state.isLoading=false,
//             state.isSuccess=false,
//             state.message="rejected"
//         })
//     },
// })

