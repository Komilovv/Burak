import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

const routerAdmin = express.Router();

// Restaurant
routerAdmin.get("/", restaurantController.goHome); // API
routerAdmin.get("/login", restaurantController.getLogin) // API
           .post("/login", restaurantController.processLogin); // API

routerAdmin.get("/signup", restaurantController.getSignup) // API
           .post("/signup",
            makeUploader("members").single("memberImage"),
            restaurantController.processSignup); // API
routerAdmin.get("/logout", restaurantController.logout)

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

// Product
routerAdmin.get("/product/all",
    restaurantController.verifyRestaurant,
    productController.getAllProducts);
routerAdmin.post("/product/create",
    restaurantController.verifyRestaurant,
    makeUploader("products").array("productImages",6),
    productController.createNewProduct);
routerAdmin.post("/product/:id",
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct);

// User
export default routerAdmin; 