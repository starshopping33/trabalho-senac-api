import 'express-async-errors'
import express, { Application } from "express"

import cors from "cors"
import { UserRoutes } from './Routes/User.Routes'
import { handleErrors } from './erros'
import { productRoutes } from './Routes/products.routes'

const app:Application = express()

app.use(cors())
app.use(express.json())

app.use("/users",UserRoutes)
app.use("/product",productRoutes)


app.use(handleErrors)
export default app