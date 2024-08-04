import bcrypt from 'bcrypt'
import userModel from "../models/userModel.js";
import { createToken } from '../utils/jwt.js';
const {hash,compare}=bcrypt
export const userSignup=async(req,res,next)=>{
    try{
    const{email,name,password}=req.body
    console.log(password);
    const isExisting= await userModel.findOne({email})
    if(isExisting) return res.status(409).json({status:"already",error:true,message:"user already exists"})
    const hashedPass=await hash(password,6)
    const user=new userModel({name,email,password:hashedPass})
    await user.save()

    res.clearCookie("auth_token", {
        httpOnly: true,
        signed: true,
        // domain:"cheat-chat-production.up.railway.app",
      });
      const token=createToken(user._id.toString(),user.email,"7d")
      const expires=new Date()
      expires.setDate(expires.getDate()+7)
      res.status(200).cookie(COOKIE_NAME, token, {
        expires,
        httpOnly: true,
        signed: true,
        // domain:"localhost",
        });


    return res.status(200).json({status:"success",message:"Signed In",success:true})
    }
    catch(error){
        console.log(error);
        return res.status(404).json("Some error occured")
    }
    
    
}
