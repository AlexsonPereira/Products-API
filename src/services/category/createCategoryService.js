import { database } from '../../database/index.js'
import AppError from '../../error.js'
import { responseCategorieSchema } from '../../schemas/categoriesSchema.js'

export const createCategoryService = async body => {
  try {
    const findExistCategory = await database.query(
      ` SELECT 
      * 
          FROM 
              categories
          WHERE
              name = $1;`,
      [body.name]
    )

    if (findExistCategory.rowCount > 0) {
      throw new AppError('category already exists', 404)
    }

    const category = await database.query(
      `
     INSERT INTO 
        categories (name)
     VALUES 
        ($1)
     RETURNING *;`,
      [body.name]
    )

    const returnedCategory = await responseCategorieSchema.validate(category.rows[0], {
      stripUnknown: true
    })
    console.log(returnedCategory)

    return returnedCategory
  } catch (error) {
    throw new AppError('category already exists', 400)
  }
}
