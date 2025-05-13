//required import express,dotenv,database connection and routes
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRotes from "./routes/userRoutes.js"

dotenv.config();

const app=express()
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json())

//apis
app.use("/api/users", userRotes);

//database connection
connectDB();

//app listen
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})