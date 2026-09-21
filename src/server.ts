import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL as string, {})
.then((data)=>{
    console.log("Successfully connected to MongoDB");
})
.catch((err)=>{
    console.log(`Error on connection ${err}`)
});
