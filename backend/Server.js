const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/Routes')
const { expressjwt } = require('express-jwt')
const fs = require('fs')


require('dotenv').config()

const app = express()
const PORT = process.env.port || 5001

const publicKey = fs.readFileSync(process.env.AUTH0_SIGNING_CERTIFICATE_FILENAME);


app.use(expressjwt({
    algorithms: ['RS256'],
    secret: publicKey,
    getToken: (req) => {return req.headers.authorization.split(' ')[1]}
}))

app.use(express.json())

app.use(cors({
    origin: [
        'http://localhost:3000'
    ]
}))

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Successfully connected to MongoDB`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
