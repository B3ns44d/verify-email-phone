a simple nodejs service to verify user phone number

Usage:

add env file: `cp .env.example .env`

install dependencies: `yarn install`
run server: `yarn dev`

send verification code: `curl -X GET -H "Content-Type: application/json" -d '{"phoneNumber":"+79161234567"}' http://localhost:3004/verify`

example response:

```json
{
  "verificationRequest": {
    "sid": "VE2d719a0fd2062e0cc9f63e85f1dafb19",
    "serviceSid": "VA416ef396ea0c4ce0bf5a1f6b745f2643",
    "accountSid": "AC4e4d5e928e6642378085569c67188543",
    "to": "+79161234567",
    "channel": "sms",
    "status": "pending",
    "valid": false,
    "lookup": {
      "carrier": {
        "mobile_country_code": "250",
        "type": "mobile",
        "error_code": null,
        "mobile_network_code": "01",
        "name": "Mobile TeleSystems"
      }
    },
    "amount": null,
    "payee": null,
    "sendCodeAttempts": [
      {
        "attempt_sid": "VLd599042ae0684cd89e454867763b6617",
        "channel": "sms",
        "time": "2021-12-31T19:39:26.173Z"
      }
    ],
    "dateCreated": "2021-12-31T19:39:26.000Z",
    "dateUpdated": "2021-12-31T19:39:26.000Z",
    "url": "https://verify.twilio.com/v2/Services/VAc04ef1d93c9f4d288446953638fa80b2/Verifications/VE2d719a0fd2062e0cc9f63e85f1dafb19"
  }
}
```

verify code: `curl -X POST -H "Content-Type: application/json" -d '{"phoneNumber":"+79161234567","verificationCode":"123456"}' http://localhost:3004/verify`

Using Docker:

add env file: `cp .env.example .env`

build your image: `docker build -t verify-phone .`

spin up your container: `docker run --env-file .env --name verify-phone -p 3004:3004 verify-phone:latest`
