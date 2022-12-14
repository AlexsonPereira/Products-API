import { database } from '../../database/index.js'
import AppError from '../../error.js'
import { responseCategorieSchema } from '../../schemas/categoriesSchema.js'

export const listIdCategoryService = async id => {
  try {
    const findExistCategory = await database.query(
      ` SELECT 
      * 
          FROM 
              categories
          WHERE
              id = $1;`,
      [id]
    )

    if (findExistCategory.rowCount == 0) {
      throw new AppError('category not exists', 404)
    }

    const category = await database.query(
      `
    SELECT
        *
    FROM 
        categories
    WHERE
        id = $1
    `,
      [id]
    )
    const returnedCategory = await responseCategorieSchema.validate(category.rows[0], {
      stripUnknown: true
    })

    return returnedCategory
  } catch (error) {
    throw new AppError('category not exists', 404)
  }
}
