import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();


router.post("/signup", memberController.signup); // API

router.post("/login", memberController.login); // API

export default router;   