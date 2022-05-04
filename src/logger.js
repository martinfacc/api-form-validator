/**
 * It logs the request method, path, body, params, and query to the console
 * @param request - The request object contains information about the HTTP request that raised the
 * event.
 * @param response - The response object is used to send data back to the client.
 * @param next - A function that is called to pass control to the next middleware function.
 */
const logger = (request, response, next) => {
	console.log('---')
	console.log('📝  Request received')
	console.log('📝  Method: ' + request.method)
	console.log('📝  Path: ' + request.path)
	console.log('📝  Body: ' + JSON.stringify(request.body))
	console.log('📝  Params: ' + JSON.stringify(request.params))
	console.log('📝  Query: ' + JSON.stringify(request.query))
	next()
}

export default logger