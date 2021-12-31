const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env
const express = require('express')

const verifyRouter = express.Router()

verifyRouter.get('/', async (req, res) => {
  return res.status(200).json({ status: 'success'})
})

module.exports = verifyRouter
