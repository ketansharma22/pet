import express from 'express';
import { appRouter } from './routes/index.js';
const app=express()
import cors from 'cors'

//all the middle wares are in app.js 
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())

app.use("/pet",appRouter)
export default app