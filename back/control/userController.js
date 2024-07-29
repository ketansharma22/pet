import bcrypt from 'bcrypt'
import userModel from "../models/userModel.js";
const {hash,compare}=bcrypt
export const userSignup=async(req,res,next)=>{
    try{
    const{email,name,password}=req.body
    console.log(password);
    const isExisting= await userModel.findOne({email})
    if(isExisting) return res.status(401).json("user already exists")
    const hashedPass=await hash(password,6)
    const user=new userModel({name,email,password:hashedPass})
    await user.save()
    return res.status(200).json("Success")
    }
    catch(error){
        console.log(error);
        return res.status(404).json("Some error occured")
    }
    
    
}
