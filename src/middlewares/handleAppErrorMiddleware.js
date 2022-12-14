import AppError from '../error.js'

const handleAppError = (error, req, res, next) => {
  if (error instanceof AppError) {
    console.log('estou aqui')
    return res.status(error.statusCode).json(error.message)
  }
  return res.status(500).json({
    message: 'internal server error'
  })
}

export default handleAppError
