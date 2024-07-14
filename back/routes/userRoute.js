import { Router } from "express";
import { getAllUsers } from "../control/getAllUsers.js";
import { userSignup } from "../control/userController.js";
export const userRoute=Router()

userRoute.get('/',getAllUsers)
userRoute.post('/signup',userSignup)
