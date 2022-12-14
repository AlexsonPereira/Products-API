import { createCategoryService } from '../services/category/createCategoryService.js'
import { deleteCategoryService } from '../services/category/deleteCategoryService.js'
import { editCategoryService } from '../services/category/editCategoryService.js'
import { listCategoryService } from '../services/category/listCategoryService.js'
import { listIdCategoryService } from '../services/category/listIdCategoryService.js'

const createCategoryController = async (req, res) => {
  const categoryCreate = await createCategoryService(req.body)
  return res.status(201).json(categoryCreate)
}
const listCategoryController = async (req, res) => {
  const categories = await listCategoryService()
  return res.status(200).json(categories)
}
const deleteCategoryController = async (req, res) => {
  const deleteCat = await deleteCategoryService(req.params.id)
  return res.status(204).json(deleteCat)
}
const editCategoryController = async (req, res) => {
  const categorieEdit = await editCategoryService(req.params.id, req.body.name)
  return res.status(200).json(categorieEdit)
}
const listIdCategoryController = async (req, res) => {
  const category = await listIdCategoryService(req.params.id)
  return res.status(200).json(category)
}

export { createCategoryController, listCategoryController, deleteCategoryController, editCategoryController, listIdCategoryController }
