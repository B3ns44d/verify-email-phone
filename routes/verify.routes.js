const {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  PHONE_VERIFICATION_SID,
} = require('../config/index.js')
const { getServiceChannel, getServiceSid } = require('../utils/index.js')
const express = require('express')
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

const verifyRouter = express.Router()

verifyRouter.get('/', async (req, res) => {
  const { to, platform } = req.body
  let verificationRequest

  try {
    verificationRequest = await twilio.verify
      .services(getServiceSid(platform))
      .verifications.create({ to, channel: getServiceChannel(platform) })
  } catch (e) {
    return res.status(e.status).json({
      message: 'Something went wrong',
      error: e.status,
      errorCode: e.code,
    })
  }

  return res.status(200).json({
    message: 'Verification request sent',
    status: 200,
    verificationRequest,
  })
})

verifyRouter.post('/', async (req, res) => {
  const { verificationCode: code, to, platform } = req.body
  let verificationResult

  try {
    verificationResult = await twilio.verify
      .services(getServiceSid(platform))
      .verificationChecks.create({ to, code })
  } catch (e) {
    return res.status(e.status).send({
      message: 'Something went wrong',
      error: e.status,
      errorCode: e.code,
    })
  }

  if (verificationResult.status === 'approved') {
    return res.status(200).json({
      message: 'Verification successful',
      status: 200,
      verificationResult,
    })
  }

  return res.status(400).json({
    message: 'Verification failed',
    status: 400,
    verificationResult,
  })
})

module.exports = verifyRouter
