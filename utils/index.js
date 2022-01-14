const { PHONE_VERIFICATION_SID, EMAIL_VERIFICATION_SID } = '../config/index.js'

const getServiceSid = (platform) => {
  return platform === 'phone'
    ? process.env.PHONE_VERIFICATION_SID
    : process.env.EMAIL_VERIFICATION_SID
}

const getServiceChannel = (platform) => {
  return platform === 'phone' ? 'sms' : 'email'
}

module.exports = {
  getServiceSid,
  getServiceChannel,
}
