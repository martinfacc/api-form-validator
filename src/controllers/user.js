import dotenv from 'dotenv'
dotenv.config()
import User from '../models/user.js'
import Session from '../models/session.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/**
 * This function takes a password, generates a salt, and then hashes the password with the salt.
 * @param password - The password to hash.
 * @returns The hashPassword function is returning the hashed password.
 */
const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password, salt)
}

/**
 * It creates a new session and saves it to the database.
 * @param user - {
 * @returns The session object is being returned.
 */
const addNewSession = async (user) => {
	try {
		const session = new Session({ userId: user._id })
		const savedSession = await session.save()
		return savedSession
	} catch (error) {
		throw Error('creatingSessionError')
	}
}

/**
 * It takes a request, response, and next function as arguments, and then it tries to create a new
 * user, hash the password, save the user, and then send a response.
 * @param request - The request object contains information about the HTTP request that raised the
 * event.
 * @param response - The response object represents the HTTP response that an Express app sends when it
 * gets an HTTP request.
 * @param next - a function that you call to pass control to the next middleware function.
 */
export const signup = async (request, response, next) => {
	try {
		const newUser = request.body
		const hashedPassword = await hashPassword(newUser.password)
		const user = new User({ ...newUser, password: hashedPassword })
		await user.save()
		response.status(200).end()
	} catch (error) {
		next(error)
	}
}

export const login = async (request, response, next) => {
	try {
		const { email, password } = request.body
		const findedUser = await User.findOne({ email })
		const isPasswordValid = await bcrypt.compare(password, findedUser?.password)
		if (!findedUser || !isPasswordValid) throw Error('unauthorized')
		const session = await addNewSession(findedUser)
		const token = jwt.sign(
			{
				sessionId: session._id,
				userId: findedUser._id
			},
			process.env.JWT_SECRET
		)
		response.status(200).send({
			user: findedUser.toJSON(),
			token
		})
	} catch (error) {
		next(error)
	}
}

export const logout = async (request, response, next) => {
	try {
		const header = request.get('authorization')
		const token = header.slice(7, header.length)
		const { id } = jwt.verify(token, process.env.JWT_SECRET)
		const session = await Session.findById(id)
		if (!session) throw Error('invalidSession')
		await session.remove()
		response.status(200).end()
	} catch (error) {
		next(error)
	}
}
