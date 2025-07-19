import { Router } from "express";
import { ValidateDataMiddleware } from "../middleware/ValidateData.Middlawere";
import { createLoginSchema } from "../Schemas/Login.Schema";
import { createLoginController } from "../controllers/Login.Controller";
import { validateTokenMiddleware } from "../middleware/ValidateToken.Middlaware";

export const Loginroutes:Router = Router()

Loginroutes.post("", ValidateDataMiddleware(createLoginSchema),createLoginController,validateTokenMiddleware)
