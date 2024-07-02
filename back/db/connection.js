import mongoose from "mongoose";
import { config } from "dotenv";
config()

import { connect } from "mongoose";
export const connectToDatabase=async ()=>{
    try{


        await connect(process.env.MONGO_URL)
        console.log("connection established");
    }
    catch(error){
        console.log(error);
    }
}