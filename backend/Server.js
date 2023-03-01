const express = require('express')
const mongo = require('mongoose')

const routes = require('./routes/TodoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5001

mongo
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Successfully connected to MongoDB`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
