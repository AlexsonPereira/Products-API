import { database } from '../../database/index.js'

export const listProductService = async () => {
  const queryResponse = await database.query(
    `
  SELECT
      *
  FROM
      products;
  `,
    []
  )
  console.log(queryResponse)
  return queryResponse.rows
}
