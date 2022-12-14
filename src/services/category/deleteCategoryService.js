import { database } from '../../database/index.js'
import AppError from '../../error.js'

export const deleteCategoryService = async id => {
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

    database.query(
      `
      DELETE FROM
          categories
      WHERE
          id = $1
       `,
      [id]
    )

    return {}
  } catch (error) {
    throw new AppError('category not exists', 404)
  }
}
