import { Router } from 'express'
import { createCategoryController, deleteCategoryController, editCategoryController, listCategoryController, listIdCategoryController } from '../controllers/categoryControllers.js'

const categoryRoutes = Router()

categoryRoutes.post('', createCategoryController)
categoryRoutes.get('', listCategoryController)
categoryRoutes.get('/:id', listIdCategoryController)
categoryRoutes.patch('/:id', editCategoryController)
categoryRoutes.delete('/:id', deleteCategoryController)

export default categoryRoutes
