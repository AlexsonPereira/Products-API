import { database } from '../../database/index.js'
import AppError from '../../error.js'

export const listCategoryProductsServices = async id => {
  try {
    const queryResponse = await database.query(
      `
      SELECT
         c.name AS category, p.name AS name, p.price AS price
      FROM 
         products p
      JOIN 
         categories c ON p.category_id = c.id
      WHERE 
         category_id = $1;
      `,
      [id]
    )
    return queryResponse.rows
  } catch (error) {
    throw new AppError('Category Not Exists', 404)
  }
}
