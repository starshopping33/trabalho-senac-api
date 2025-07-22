import {z} from "zod"
import { returnUserSchema } from "./User.Schema"

export const craetePostsSchema = z.object({
    title:z.string(),
    content:z.string(),
    usuario: returnUserSchema
})
export const returnPostSchema = craetePostsSchema.extend({
    id: z.number()
})

export type CreateProduto = z.infer<typeof craetePostsSchema>
export type Post = z.infer<typeof returnPostSchema>