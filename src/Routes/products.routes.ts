import { Router } from "express";
import { createProductController,  getAllProdutosController } from "../controllers/products.controllers";
import { ValidateDataMiddleware } from "../middleware/ValidateData.Middlawere";
import { craeteProdutoSchema, ReturnAllProdutoSchema } from "../Schemas/Produto.Schemas";
import { validateTokenMiddleware } from "../middleware/ValidateToken.Middlaware";


export const productRoutes:Router=Router()

productRoutes.post("",ValidateDataMiddleware(craeteProdutoSchema),createProductController)
productRoutes.get("",getAllProdutosController)