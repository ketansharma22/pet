import { Router } from "express";
import { userRoute } from "./userRoute.js";

export const appRouter=Router()
appRouter.use('/users',userRoute)