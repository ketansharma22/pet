import userModel from "../models/userModel.js";
export const getAllUsers=async(req,res,next)=>{
    try {
        const users = await userModel.find();
        return res.json({ message: "helo", users });
      } catch (error) {
        console.log(error);
      }
}