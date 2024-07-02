import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//the listening of server are in server.js
connectToDatabase().then(()=>{
    app.listen(3000,()=> console.log("serverOPEN"))
})
.catch((error)=> console.log(error))