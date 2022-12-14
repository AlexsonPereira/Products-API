import { database } from '../../database/index.js'
import AppError from '../../error.js'
import createProductSchema from '../../schemas/productsSchema.js'

export const createProductService = async body => {
  try {
    const queryResponse = await database.query(
      `
    INSERT INTO
      products(name,price,category_id)
    VALUES
      ($1,$2,$3)
    RETURNING 
      *;
    `,
      [body.name, body.price, body.category_id]
    )

    const returnProd = await createProductSchema.validate(queryResponse.rows[0], {
      stripUnknown: true
    })

    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError(error, 400)
  }
}
