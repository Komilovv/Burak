import {Request, Response} from "express";
import Errors, { Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");

        res.render("products")
        
    }
    catch (err) {
        console.log("Error, getAllProducts:", err);
        const message = err instanceof Errors? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.loc.replace </script>`);
    }
}

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct");
        res.send("DONE");
        
    }
    catch (err) {
        console.log("Error, createNewProduct:", err);
        const message = err instanceof Errors? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.loc.replace </script>`);
    }
}

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct");
        
    }
    catch (err) {
        console.log("Error, updateChosenProduct:", err);
        const message = err instanceof Errors? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.loc.replace </script>`);
    }
}

export default productController;