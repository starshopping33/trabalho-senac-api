import { Request, Response } from "express";
import { createProductService } from "../Service/createproduct.service";


export const createProductController=async(req:Request,res:Response)=>{
    const productData=req.body
    const product = await createProductService(productData)

    return res.status(201).json(product)
}