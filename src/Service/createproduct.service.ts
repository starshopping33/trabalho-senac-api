import { promise, string } from "zod";
import { CreateProduto, returnProdutoSchema } from "../Schemas/Produto.Schemas";
import { Repository } from "typeorm";
import { produto } from "../entities/produto.entities";
import { AppDataSource } from "../data-source";

export const createProductService=async(productData:CreateProduto)=>{

    const ProdutoRepository:Repository<produto> = AppDataSource.getRepository(produto)
    const createProduto = ProdutoRepository.create(productData)
    await ProdutoRepository.save(createProduto)
    
    const produtores = returnProdutoSchema.parse(createProduto)
    return produtores
    
}   