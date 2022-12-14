import { database } from '../../database/index.js'
import AppError from '../../error'

export const editProductService = async (body, id) => {
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
    console.log(verifyExist)

    if (verifyExist.rowCount == 0) {
      throw new AppError('Product Not Exists', 404)
    }

    let query = 'UPDATE products SET '
    const keys = Object.keys(body)
    const values = Object.values(body)

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `
    })

    query = query.slice(0, -2)

    query += `WHERE id = \$${(keys.length += 1)} RETURNING * ;`

    const queryResponse = await database.query(query, [...values, id])

    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError('Product Not Exists', 404)
  }
}
