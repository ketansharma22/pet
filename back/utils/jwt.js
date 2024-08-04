import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

export const createToken=(id,email,expiresIn)=>{
    const token=jwt.sign({id:id,email:email},process.env.JWT_SECRET,{
        expiresIn:expiresIn
    })
    console.log(token)
    return token
}

// export const verifyToken=async(req,res,next)=>{
//     const token=req.signedCokkies[`${process.env.COOKIE_NAME}`]
//     if(!token || token.trim()==""){
//         return res.status(401).json({message:"Token not received"})
//     }

// }