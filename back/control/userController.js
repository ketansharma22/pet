export const userSignup=async(data)=>{
    console.log("hel");
    const{email,name,password}=data.body
    console.log(email,name,password);
}