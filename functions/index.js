/* eslint-disable */

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https')
const logger = require('firebase-functions/logger')

const validator = require('validator') // Use validator library for input validation
const rateLimiter = require('express-rate-limit') // Use rate limiter middleware

// Set up rate limiter to limit submissions (e.g., max 10 submissions per minute)
const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per minute
  message: 'Too many form submissions from this IP, please try again later.'
})

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})

/**
 * Function to receive a form submission and send an email
 */
exports.contactForm = onRequest((request, response) => {
  const { name, email, message } = request.body
  logger.info('Contact form submission', { name, email, message })
  response.send('Form submitted')
})

/**
 * Function to receive a form submission and send an email
 */
exports.contactFormSecure = onRequest((request, response) => {
  // Check the HTTP method
  if (request.method !== 'POST') {
    return response.status(405).send('Method Not Allowed')
  }

  // Apply rate limiter
  limiter(request, response, () => {
    const { name, email, message } = request.body

    // Validate form data
    if (!name || !email || !message) {
      return response.status(400).send('All fields are required.')
    }

    // Sanitize and validate email
    if (!validator.isEmail(email)) {
      return response.status(400).send('Invalid email address.')
    }

    // Sanitize name and message to prevent XSS attacks
    const safeName = validator.escape(name)
    const safeMessage = validator.escape(message)

    // Log sanitized submission
    logger.info('Sanitized contact form submission', {
      name: safeName,
      email,
      message: safeMessage
    })

    // TODO: Send email logic here using a service like SendGrid or Mailgun

    // Send a success response
    response.status(200).send('Form submitted successfully = ' + safeName)
  })
})

// some customer data retrieved from Firestore or elsewhere
const customers = {
  32: { name: 'Alice', address: '21 Jump Street' },
  33: { name: 'Bob', address: '1 Main Street' },
  34: { name: 'Charlie', address: '10 Oak Avenue' },
  35: { name: 'David', address: '5 Pine Lane' },
  36: { name: 'Eve', address: '9 Maple Drive' },
  37: { name: 'Frank', address: '15 Cedar Street' },
  38: { name: 'Grace', address: '3 Birch Road' },
  39: { name: 'Henry', address: '22 Elm Street' },
  40: { name: 'Ivy', address: '11 Walnut Avenue' },
  41: { name: 'Jack', address: '7 Ash Drive' },
  42: { name: 'Karen', address: '18 Willow Way' },
  43: { name: 'Leo', address: '12 Poplar Lane' },
  44: { name: 'Megan', address: '20 Fir Street' },
  45: { name: 'Nina', address: '2 Redwood Boulevard' },
  46: { name: 'Oscar', address: '13 Sycamore Circle' },
  47: { name: 'Paul', address: '19 Pinehurst Road' },
  48: { name: 'Quincy', address: '8 Spruce Lane' },
  49: { name: 'Rita', address: '6 Maple Avenue' },
  50: { name: 'Sam', address: '17 Oakridge Drive' },
  51: { name: 'Tina', address: '4 Elmwood Court' },
  52: { name: 'Uma', address: '16 Dogwood Lane' },
  53: { name: 'Victor', address: '23 Cypress Street' }
}

/**
 * /customers/53 => JSON ({ name: 'Victor', address: '23 Cypress Street' })
 * /customers => ALL Customers (as a JSON )
 * myapi.asdfasdfsdf3.cloudrun.com/customers/53
 * /customers/53/
 * ['53']
 */
exports.myapi = onRequest((req, res) => {
  if (req.method === 'GET' && req.path.startsWith('/customers')) {
    const pathElements = req.path
      .split('/') // split along the slashes
      .filter((e) => e) // remove the empty strings in the array
      .splice(1) // remove the first "customers" element

    // Path: /customers
    if (pathElements.length === 0) {
      // Return all customers
      res.status(200).json(customers).end()
    } else if (pathElements.length === 1) {
      const customerId = pathElements[0]
      if (customers[customerId]) {
        res.status(200).json(customers[customerId]).end()
      } else {
        res.status(404).send('Customer not found').end()
      }
    }
    // customers/53/address
    else if (pathElements.length === 2) {
      const customerId = pathElements[0]
      if (customers[customerId]) {
        res.status(200).json({ address: customers[customerId].address }).end()
      } else {
        res.status(404).send('Customer not found').end()
      }
    }
  } else {
    res.status(405).send('Method not allowed').end() // Handle other methods
  }
})
