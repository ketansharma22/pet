export const userSignup=async(req,res,next)=>{
    console.log("hel");
    const{email,name,password}=req.body
    console.log(email,name,password);
    return res.json({message:"donee"})
}