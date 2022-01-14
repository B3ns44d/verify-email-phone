require('dotenv').config()

const config = {
  PHONE_VERIFICATION_SID: process.env.PHONE_VERIFICATION_SID,
  EMAIL_VERIFICATION_SID: process.env.EMAIL_VERIFICATION_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
}

module.exports = config
