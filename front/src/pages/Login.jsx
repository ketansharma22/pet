import React,{useState} from 'react'
import Shutter from '../additionals/Shutter'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import '../styling/Login.css'
import toast from 'react-hot-toast'
import {Auth} from 'two-step-auth';
const Login = () => {
  
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[data,setData]=useState({
    email:"",
    password:"",
  })
  const handleChange=(e)=>{
    const{name,value}=e.target
    setData((prev)=>({...prev,[name]:value}))
  }
  const handleLogin=async(e)=>{
    e.preventDefault()
    toast.success("Logged in",{id:"logintoast"})
  
  }

  return (
    <div id="login">
      <form className='form' onSubmit={handleLogin}>
        <div id="fields">
          
          <TextField
          sx={{
        // Root class for the input field
        "& .MuiFilledInput-root": {
          color: "#000",
          backgroundColor: "rgba(229, 220, 203, 0.662)",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        },
        // Class for the label of the filled input field
        "& .MuiInputLabel-filled": {
          color: "#2e2e2e",
          fontWeight: "bold",
        },
      }}
          onChange={handleChange}
            name="email"
            value={data.email}
            required
            id="outlined-basic"
            label="email"
            variant="filled"
          />
          <TextField
          sx={{
        // Root class for the input field
        "& .MuiFilledInput-root": {
          color: "#000",
          backgroundColor: "rgba(229, 220, 203, 0.662)",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        },
        // Class for the label of the filled input field
        "& .MuiInputLabel-filled": {
          color: "#2e2e2e",
          fontWeight: "bold",
        },
      }}
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
          <Button type="submit" variant="contained" id="loginbutton">LogIn</Button>
          <Link style={{textDecoration:"none", color:"rgba(229, 220, 203, 0.662) "}} to='/signup' >New user ?</Link>
        </div>
        
      </form>
      {/* <Shutter/> */}
    </div>
  );
}

export default Login