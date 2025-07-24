import { Request, Response } from "express";
import { createProductService } from "../Service/createproduct.service";
import { CreateProduto, Iproduto } from "../Schemas/Produto.Schemas";
import { GetAllProdutosService } from "../Service/GetProdutos.Service";


export const createProductController=async(req:Request,res:Response):Promise<Response>=>{
    const productData:CreateProduto=req.body
    const product = await createProductService(productData)

    return res.status(201).json(product)
}


    export const getAllProdutosController = async (req:Request,res:Response):Promise<Response>=>{

        const offset = Number (req.query.offset)
        const Produto:Iproduto = await GetAllProdutosService(offset)
        return res.status(200).json(Produto)

    }