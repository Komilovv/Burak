import {T} from "../libs/types/common";
import {Request, Response} from "express";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum"; // maybe no need for that line
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

// React
const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        //TODO: oken
        console.log("signup");

        const input: MemberInput = req.body,
          result = await memberService.signup(input);

        res.json(result);
    }
    catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login")
        const input: LoginInput = req.body,
          result = await memberService.login(input);

        res.json(result);
    }
    catch (err) {
        console.log("Error, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default memberController;