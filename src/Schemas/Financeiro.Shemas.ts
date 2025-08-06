import z from "zod";

export const CreateFinanceiroSchema = z.object({

    descricao:z.string(),
    valor:z.number()
   
  

})
export const ReturnAllFInanceSchema =  z.array(CreateFinanceiroSchema)



export type createFinanceiro = z.infer<typeof CreateFinanceiroSchema>
export type iGetFinanceiro = z.infer<typeof ReturnAllFInanceSchema >