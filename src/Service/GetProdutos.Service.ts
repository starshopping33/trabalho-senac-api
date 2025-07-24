import { Repository } from "typeorm";
import { Iproduto, ReturnAllProdutoSchema, returnProdutoSchema } from "../Schemas/Produto.Schemas";
import { AppDataSource } from "../data-source";
import { produto } from "../entities/produto.entities";


export const GetAllProdutosService = async (offset:Number):Promise<Iproduto>=>{
    const ProdutoRepository:Repository<produto> = AppDataSource.getRepository(produto)

    const findProduto:produto[] | [] = await ProdutoRepository.find()

    const parseprodutos = ReturnAllProdutoSchema.parse(findProduto)

    return parseprodutos
}