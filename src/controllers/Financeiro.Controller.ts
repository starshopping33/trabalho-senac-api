import { Response } from "express";
import { Request } from "express-serve-static-core";

import { constrainedMemory } from "process";

import { GetAllfinanceService } from "../Service/GetFinanceiro.Service";
import { iGetFinanceiro } from "../Schemas/Financeiro.Shemas";
import { CreateFinanceiroService } from "../Service/CreateFinanceiro.Service";

export const createFinanceiroController = async (req:Request,res:Response):Promise<Response>=>{

                const FinanceiroData = req.body
                const Financeiro = await CreateFinanceiroService(FinanceiroData)

                return res.status(201).json(Financeiro)

}
                export const GetFinanceiro = async(req:Request,res:Response):Promise<Response>=>{

        const offset = Number (req.query.offset)
        const finance:iGetFinanceiro = await GetAllfinanceService(offset)

        return res.status(200).json(finance)

}