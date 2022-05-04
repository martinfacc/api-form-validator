import express from 'express'
import { validate, checkSintaxis } from '../controllers/validation.js'

const validationRouter = express.Router()

validationRouter.post('/', validate)
validationRouter.post('/check', checkSintaxis)

export default validationRouter
