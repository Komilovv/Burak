import Errors, { HttpCode } from "../libs/Errors";
import { Response } from "express";
import { T } from "../libs/types/common";
import { ExtendedRequest } from "../libs/types/member";
import OrderService from "../models/Order.service";

const orderController: T = {};
const orderService = new OrderService;

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
     try {  
        console.log("createOrder");

        const result = await orderService.creatOrder(req.member, req.body);
        
        res.status(HttpCode.CREATED).json(result);
    }
    catch (err) {
        console.log("Error, createOrder:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default orderController;