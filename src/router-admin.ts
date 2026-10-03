import express from "express";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

// Restaurant
routerAdmin.get("/", restaurantController.goHome); // API
routerAdmin.get("/login", restaurantController.getLogin) // API
           .post("/login", restaurantController.processLogin); // API

routerAdmin.get("/signup", restaurantController.getSignup) // API
           .post("/signup", restaurantController.processSignup); // API
routerAdmin.get("/logout", restaurantController.logout)

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

// Product
// User
export default routerAdmin; 