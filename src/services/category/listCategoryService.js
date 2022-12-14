import { database } from '../../database/index.js'
import AppError from '../../error.js'
import { listCategoriesSchema } from '../../schemas/categoriesSchema.js'

export const listCategoryService = async () => {
  const categories = await database.query(`
   SELECT
      *
   FROM 
      categories;
   `)
  if (categories.rowCount == 0) {
    console.log('oi')
    throw new AppError('No Content', 404)
  }

  const returnedCategory = await listCategoriesSchema.validate(categories.rows)
  console.log(returnedCategory)

  return returnedCategory
}
