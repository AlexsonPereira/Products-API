import { database } from '../../database/index.js'
import AppError from '../../error.js'

export const editCategoryService = async (id, name) => {
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

    if (findExistCategory.rowCount <= 0) {
      throw new AppError('category not exists', 404)
    }

    const findNameCategory = await database.query(
      ` SELECT 
        * 
            FROM 
                categories
            WHERE
                name = $1;`,
      [name]
    )

    if (findNameCategory.rowCount > 0) {
      throw new AppError('Name already exists!', 409)
    }

    const categoryEdit = await database.query(
      `
        UPDATE
           categories
        SET
           name = $1
        WHERE
           id = $2
        RETURNING
              *;
     `,
      [name, id]
    )

    return { name: `${categoryEdit.rows[0].name} Atualizada` }
  } catch (error) {
    throw new AppError('category not exists', 404)
  }
}
