import { Router } from "express";
import { getAllUsers } from "../control/getAllUsers.js";
export const userRoute=Router()

userRoute.get('/',getAllUsers)
