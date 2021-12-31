require('dotenv').config({ path: './.env' })
const express = require('express')
const logger = require('morgan')
const verifyRouter = require('./routes/verify.routes.js')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Ping Pong!')
})

app.use('/verify', verifyRouter)

module.exports = app
