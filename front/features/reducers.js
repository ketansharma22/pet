import { createReducer } from "@reduxjs/toolkit";
import { register } from "./auth/authSlice.js";

const initialState={
    isSignedUp:false,
    error:null,
}

const authReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(register.pending, (state) => {
      state.isSignedUp = false;
      state.error = null;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isSignedUp = true;
      state.error = null;
    })
    .addCase(register.rejected, (state, action) => {
      state.isSignedUp = false;
      state.error = action.payload.message||action.error.message;
    });
})
export default authReducer