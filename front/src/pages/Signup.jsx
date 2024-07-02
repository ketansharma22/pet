import React from "react";
import Shutter from "../additionals/Shutter";
import TextField from "@mui/material/TextField";
const Signup = () => {
  return (
    <div>
      <form>
        <TextField required  id="outlined-basic" label="name" variant="outlined"/>
        <TextField required id="outlined-basic" label="email" variant="outlined"/>
        <TextField required id="outlined-basic" label="password" variant="outlined"/>


      </form>
      {/* <Shutter/> */}
    </div>
  );
};

export default Signup;
