import { promise, string } from "zod";
import { CreateProduto } from "../Schemas/createSchemaproduct";
import { Repository } from "typeorm";
import { produto } from "../entities/produto.entities";
import { AppDataSource } from "../data-source";

export const createProductService=async(productData:CreateProduto)=>{

    const ProdutoRepository:Repository<produto> = AppDataSource.getRepository(produto)

    const findProduto:produto|null = await ProdutoRepository.findOne({

        where:{
            nome:productData.content
            
        }
    })
    
}   