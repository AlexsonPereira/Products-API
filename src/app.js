import 'express-async-errors'
import express from 'express'
import handleAppError from './middlewares/handleAppErrorMiddleware.js'
import categoryRoutes from './routers/categoriesRoutes.js'
import productRoutes from './routers/productsRouts.js'

const app = express()
app.use(express.json())

app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)

app.use(handleAppError)

export default app
