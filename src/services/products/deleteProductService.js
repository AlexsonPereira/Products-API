import { database } from '../../database/index.js'
import AppError from '../../error.js'

export const deleteProductService = async id => {
  try {
    const verifyExist = await database.query(
      `
     SELECT 
        *
     FROM 
        products
     WHERE
        id = $1;
     `,
      [id]
    )

    if (verifyExist.rowCount == 0) {
      throw new AppError('Product Not Exists', 404)
    }

    const queryResponse = await database.query(
      `
     DELETE FROM
       products
     WHERE
       id = $1;
     `,
      [id]
    )
    return {}
  } catch (error) {
    throw new AppError('Product Not Exists', 404)
  }
}
