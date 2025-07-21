import { Router } from "express";
import { createProductController } from "../controllers/products.controllers";


export const productRoutes:Router=Router()

productRoutes.post("",createProductController)