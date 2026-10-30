import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

// Member 
router.post("/member/signup", memberController.signup); // API
router.post("/member/login", memberController.login); // API
router.post("/member/logout",
    memberController.verifyAuth,
    memberController.logout
);
router.get(
    "/member/detail", 
    memberController.verifyAuth,
    memberController.getMemberDetail
);

// Product

// Order
export default router;      