import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import mongoose from "mongoose";

//TCP connection
mongoose.connect(process.env.MONGO_URL as string, {})
.then((data)=>{
    console.log(typeof(data)); // returns object
    console.log("Successfully connected to MongoDB");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.info(`The server is running on port: ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch((err)=>{
    console.log(`Error on connection ${err}`)
});
