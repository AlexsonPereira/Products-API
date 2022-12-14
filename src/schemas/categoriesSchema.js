import * as yup from 'yup'

const validationCategorieSchema = yup.object().shape({
  name: yup.string().required()
})

const responseCategorieSchema = yup.object().shape({
  id: yup.number(),
  name: yup.string()
})

const listCategoriesSchema = yup.array(responseCategorieSchema)

export { responseCategorieSchema, listCategoriesSchema, validationCategorieSchema }
