import { createProductService } from '../services/products/createProductService.js'
import { deleteProductService } from '../services/products/deleteProductService.js'
import { listProductService } from '../services/products/listProductsService.js'
import { listIdProductService } from '../services/products/listIdProductService.js'
import { editProductService } from '../services/products/editProductService.js'
import { listCategoryProductsServices } from '../services/products/listCategoryProductsService.js'

const createProductController = async (req, res) => {
  const createProd = await createProductService(req.body)
  return res.status(201).json(createProd)
}
const deleteProductController = async (req, res) => {
  const deleteProd = await deleteProductService(req.params.id)
  return res.status(204).json(deleteProd)
}
const editProductController = async (req, res) => {
  const editProd = await editProductService(req.body, req.params.id)
  return res.status(200).json(editProd)
}
const listCategoryProductController = async (req, res) => {
  const listCategProd = await listCategoryProductsServices()
  return res.status(200).json(listCategProd)
}
const listIdProductController = async (req, res) => {
  const listProdId = await listIdProductService(req.params.id)
  return res.status(200).json(listProdId)
}
const listProductController = async (req, res) => {
  const listProds = await listProductService()
  return res.status(200).json(listProds)
}

export { createProductController, deleteProductController, editProductController, listCategoryProductController, listIdProductController, listProductController }
