import express from "express";
import path from "path";
import router from "./router";  // Hozircha bu file package ishlatilmaydi
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Middleware DP -> public ni ochiq qilib qo'yyapti
app.use(express.urlencoded({extended: true})); // Middleware DP -> Traditional API support (BSSR nimi?)
app.use(express.json()); // Middleware DP -> Rest API support (SPA nimi?)
app.use(morgan(MORGAN_FORMAT));
// Sessions or Token => authentication or authorization

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // for BSSR

// Routers
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA: React as Rest API

export default app;