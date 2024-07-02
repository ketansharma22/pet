import express from 'express';
import { appRouter } from './routes/index.js';
const app=express()

//all the middle wares are in app.js 
app.use(express.json())

app.use("/pet",appRouter)
export default app