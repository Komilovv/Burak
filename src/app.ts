import express from "express";
import path from "path";
import router from "./router";  // Hozircha bu file package ishlatilmaydi
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session"; // the session() creates session
import ConnectMongoDB from "connect-mongodb-session"; // to connect mongoDB
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: 'sessions'
}); // the obj connects mongoDB and create a collection named sessions 

// Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Middleware DP -> public ni ochiq qilib qo'yyapti
app.use(express.urlencoded({extended: true})); // Middleware DP -> Traditional API support (BSSR nimi?)
app.use(express.json()); // Middleware DP -> Rest API support (SPA nimi?)
app.use(morgan(MORGAN_FORMAT));

// Sessions or Token => authentication or authorization
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 60 * 60 * 7 // 7 hours
        },
        store: store,   
        resave: true,
        saveUninitialized: true // a session (and a cookie) is created and saved 
        // in MongoDB for every visitor, even those who never log in.
    })
);
app.use(function(req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
}); /* Tasavvur qiling: foydalanuvchi login qildi va uning ma'lumoti 
serverdagi sessionda saqlanadi. Lekin HTML sahifa (template ejs) 
to'g'ridan-to'g'ri sessionni ko'rmaydi. Shu middleware sessiondan
 ma'lumotni olib, sahifaga "uzatib" beradi. */

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // for BSSR

// Routers
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA: React as Rest API

export default app;