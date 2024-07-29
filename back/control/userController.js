import { Hash } from "crypto";
import userModel from "../models/userModel.js";
export const userSignup=async(req,res,next)=>{
    const{email,name,password}=req.body
    console.log(password);
    const isExisting=userModel.findOne({email})
    if(isExisting) return res.status(401).send("user already exists")
    const hashedPass=await Hash(password,6)
    const user=new userModel({name,email,password:hashedPass})
    await user.save()
    
    console.log(hashedPass);

}
