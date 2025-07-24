import {z} from "zod"
import { returnUserSchema } from "./User.Schema"

export const craeteProdutoSchema = z.object({
    nome:z.string(),
    preco_de_venda:z.number(),
    preco_de_custo:z.number()
  
})
export const returnProdutoSchema = craeteProdutoSchema.extend({
    id:z.number()
})
export const ReturnAllProdutoSchema = returnProdutoSchema.array()



export type CreateProduto = z.infer<typeof craeteProdutoSchema>
export type Post = z.infer<typeof returnProdutoSchema>
export type Iproduto = z.infer<typeof ReturnAllProdutoSchema>