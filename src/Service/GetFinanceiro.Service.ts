import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { iGetFinanceiro, ReturnAllFInanceSchema } from "../Schemas/Financeiro.Shemas"
import { financeiro } from "../entities/Financeiro.entities"

export const GetAllfinanceService = async (offset:Number):Promise<iGetFinanceiro>=>{

    const FinanceiroRepository:Repository<financeiro> =  AppDataSource.getRepository(financeiro)

    const FindFInance:financeiro [] | [] = await  FinanceiroRepository.find()

    const ParseFinance = ReturnAllFInanceSchema.parse(FindFInance)
    return(ParseFinance)
}