import { Request, Response } from "express";
import { iCreateLogin } from "../Schemas/login.Schema";
import { createLoginService } from "../SCreateLogin.Service";

export const createLoginController=async(req:Request,res:Response):Promise<Response>=>{

    const loginData:iCreateLogin = req.body
    const token: string = await createLoginService(loginData)

    return res.status(200).json({token:token})

}