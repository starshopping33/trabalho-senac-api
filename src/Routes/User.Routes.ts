import { Router } from "express";
import { createUserSchema } from "../Schemas/User.Schema";
import { ValidateDataMiddleware } from "../middleware/ValidateData.Middlawere";
import { createUserControler } from "../controllers/Usuario.Controller";

export const UserRoutes:Router = Router()

UserRoutes.post("",ValidateDataMiddleware(createUserSchema),createUserControler)