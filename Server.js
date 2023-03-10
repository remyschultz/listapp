const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/Routes')
const { expressjwt } = require('express-jwt')
const fs = require('fs')
require('dotenv').config()
const config = require('./config.js')


const PORT = config.PORT
const MONGODB_URL = config.MONGODB_URL


const app = express()

if(config.USE_AUTH) {
    const publicKey = fs.readFileSync(config.AUTH0_CERTIFICATE);

    app.use(expressjwt({
        algorithms: ['RS256'],
        secret: publicKey,
        getToken: (req) => {return req.headers.authorization.split(' ')[1]}
    }))
} else {
    console.log('Authentication is disabled. Login is still required to use the UI, but authentication tokens will not be verified on the backend.')
}

app.use(express.json())

app.use(cors({
    origin: [
        'http://localhost:3000'
    ]
}))

mongoose
    .connect(config.MONGODB_URL)
    .then(() => console.log(`Successfully connected to MongoDB`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
