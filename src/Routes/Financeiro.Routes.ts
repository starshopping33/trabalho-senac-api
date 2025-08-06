import { Router } from "express";
import { ValidateDataMiddleware } from "../middleware/ValidateData.Middlawere";
import { GetAllfinanceService } from "../Service/GetFinanceiro.Service";
import { CreateFinanceiroSchema } from "../Schemas/Financeiro.Shemas";
import { createFinanceiroController } from "../controllers/Financeiro.Controller";


export const FinanceiroRoutes:Router = Router()

 FinanceiroRoutes.post("",ValidateDataMiddleware(CreateFinanceiroSchema),createFinanceiroController)
FinanceiroRoutes.get("",GetAllfinanceService)