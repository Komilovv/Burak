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
    restaurantController.verifyRestaurant, // Authorization
    productController.getAllProducts);
routerAdmin.post("/product/create",
    restaurantController.verifyRestaurant, // Authorization
    makeUploader("products").array("productImages",6), // "productImages" is the field name of the file input in the form.
    productController.createNewProduct);
routerAdmin.post("/product/:id",
    restaurantController.verifyRestaurant, // Authorization
    productController.updateChosenProduct);
    
/** Multer takes the files sent under the field name "productImages" 
and saves them into the products folder 
helper sets it up that way).
It then puts each file’s info (filename, path, size, mimetype,
originalname, etc.) into req.files, so your controller can read it. */

// User
export default routerAdmin; 