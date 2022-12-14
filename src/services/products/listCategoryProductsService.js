import { database } from '../../database/index.js'

export const listCategoryProductsServices = async () => {
  const queryResponse = await database.query(`
   SELECT
      *
   FROM 
      products p
   JOIN 
      categories c ON p.category_id = c.id
   `)

  console.log(queryResponse)
  return queryResponse.rows
}
