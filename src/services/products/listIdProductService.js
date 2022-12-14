import { database } from '../../database/index.js'
import AppError from '../../error.js'

export const listIdProductService = async id => {
  try {
    const queryResponse = await database.query(
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
    console.log('oi')
    console.log(queryResponse)
    if (queryResponse.rowCount <= 0) {
      throw new AppError('Product not exists!', 404)
    }

    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError('Product not exists!', 404)
  }
}
