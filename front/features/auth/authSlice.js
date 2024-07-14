import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { registering } from "./services";

const user=JSON.parse(localStorage.getItem('user'))

const initialState={
    user: user? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}

export const register=createAsyncThunk('auth/register',
async(userData,thunkAPI)=>{
    try {
        console.log("slice");
        const res = await axios.post("/users/signup", { userData });
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.errors)
      }
}
)


export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false,
            state.isLoading=false,
            state.isSuccess=false,
            state.message=""
        },
    },
    extraReducers:builder=>{
        builder.addCase(register.pending,(state)=>{
            state.isError=false,
            state.isLoading=true,
            state.isSuccess=false,
            state.message=""

        }),
        builder.addCase(register.fulfilled,(state,action)=>{
            state.isError=false,
            state.isLoading=false,
            state.isSuccess=true,
            state.message="helo",
            state.user=action.payload

        }),
        builder.addCase(register.rejected,(state)=>{
            state.isError=true,
            state.isLoading=false,
            state.isSuccess=false,
            state.message="rejected"
        })
    },
})

export const {reset}=authSlice.actions
export default authSlice.reducer