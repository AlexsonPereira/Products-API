import app from './app.js'
import { startDatabase } from './database/index'

app.listen(3000, async () => {
  await startDatabase()
  console.log('Server running')
})

export default app
