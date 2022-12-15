import { Router } from 'express'
import { createProductController, deleteProductController, editProductController, listCategoryProductController, listIdProductController, listProductController } from '../controllers/productsControllers.js'

const productRoutes = Router()

productRoutes.post('', createProductController)
productRoutes.get('', listProductController)
productRoutes.get('/:id', listIdProductController)
productRoutes.patch('/:id', editProductController)
productRoutes.delete('/:id', deleteProductController)
productRoutes.get('/category/:id', listCategoryProductController)

export default productRoutes
