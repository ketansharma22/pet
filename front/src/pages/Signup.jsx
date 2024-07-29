import React, { useState } from "react";
import Shutter from "../additionals/Shutter";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import "../styling/Signup.css";
import { Link } from "react-router-dom";
import { register } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
const Signup = () => {
  const dispatch=useDispatch()
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[data,setData]=useState({
    name:"",
    email:"",
    password:"",
  })
  const handleChange=(e)=>{
    const{name,value}=e.target
    setData((prev)=>({...prev,[name]:value}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(data);
    try {
      toast.loading("Signing in",{id:"signup"})
      dispatch(register(data))
      toast.success("Signed in",{id:"signup"})
    setData({name:"",email:"",password:""})
      
    } catch (error) {
      console.log(error);
      toast.error(error,{id:"signup"})
    }
    
    
  }

  return (
    <div id="signup">
      <form onSubmit={handleSubmit}>
        <div id="fields">
          <TextField
          name="name"
          value={data.name}
            required
            id="outlined-basic"
            label="name"
            variant="filled"
            onChange={handleChange}
          />
          <TextField
          onChange={handleChange}
            name="email"
            value={data.email}
            required
            id="outlined-basic"
            label="email"
            variant="filled"
          />
          <TextField
          onChange={handleChange}
          name="password"
          type="password"
            value={data.password}
            required
            id="outlined-basic"
            label="password"
            variant="filled"
          />
        </div>
        <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center"}}>
          <Button type="submit" variant="contained" id="signupbutton">SignUp</Button>
          <Link style={{textDecoration:"none", color:"#242424"}} to='/login' >Already have an account ?</Link>
        </div>
        
      </form>
      {/* <Shutter/> */}
    </div>
  );
};

export default Signup;
