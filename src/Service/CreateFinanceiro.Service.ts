import { Repository } from "typeorm"
import { financeiro } from "../entities/Financeiro.entities"
import { AppDataSource } from "../data-source"
import { createFinanceiro } from "../Schemas/Financeiro.Shemas"


export const CreateFinanceiroService = async(FinanceiroData:createFinanceiro)=>{

    const  FinanceiroRepository:Repository<financeiro> = AppDataSource.getRepository(financeiro)
    const createFinanceiro = FinanceiroRepository.create(FinanceiroData)
    await FinanceiroRepository.save(createFinanceiro)

   
        return financeiro
}