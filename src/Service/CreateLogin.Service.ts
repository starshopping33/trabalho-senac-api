import { Repository } from "typeorm";
import { iCreateLogin, iRetunrLogin } from "../Schemas/login.Schema";
import { Usuarios } from "../entities/Usuarios.entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../erros";
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
export const createLoginService=async(loginData:iCreateLogin):Promise<string>=>{

    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            email: loginData.email
        }
    })
    if(!findUser){
        throw new AppError("Credenciais inválidas",401)
    }
    const descrypt = await compare(loginData.password,findUser.password)
   console.log(descrypt,"decrypt")
   if(!descrypt){
    throw new AppError("Credenciais inválidas",401)
   }
   
        const token = jwt.sign({
            id:findUser.id,
            email:findUser.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn:"24h",
            subject:String(findUser.id)
        }
    )
        return token
    
}