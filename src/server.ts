import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL as string, {})
.then((data)=>{
    console.log("Successfully connected to MongoDB");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.log(`The server is running on port: ${PORT}`);
    });
})
.catch((err)=>{
    console.log(`Error on connection ${err}`)
});
