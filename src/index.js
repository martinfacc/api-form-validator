import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import logger from './logger.js'
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'
import languageHandler from './middlewares/languageHandler.js'
import validationRouter from './routes/validation.js'

const { APP_PORT } = process.env
const app = express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(cors())
app.use(logger)
app.use(languageHandler)

app.get('/', (request, response) => {
	response.render('index')
})

app.use('/', validationRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(APP_PORT, () => {
	console.log(`App listening on port ${APP_PORT}!`)
})
