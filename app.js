const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { expressjwt } = require('express-jwt')
const path = require('path')
require('dotenv').config()


const routes = require('./routes/Routes.js')

const PORT = process.env.PORT || 5000
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/list-app'
const AUTH0_SIGNING_CERTIFICATE = process.env.AUTH0_SIGNING_CERTIFICATE || null
const USE_AUTH = AUTH0_SIGNING_CERTIFICATE === null ? false : true

mongoose.connect(MONGODB_URL)
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})
mongoose.connection.on('error', () => {
    console.log(error)
})

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

if(process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

if(USE_AUTH) {
    app.use(expressjwt({
        algorithms: ['RS256'],
        secret: AUTH0_SIGNING_CERTIFICATE,
        getToken: (req) => {return req.headers.authorization.split(' ')[1]}
    }))
} else {
    console.log('Authentication is disabled. Login is still required to use the UI, but authentication tokens will not be verified on the backend.')
}

app.use(express.json())

// app.use(cors({
//     origin: [
//         'http://localhost:3000'
//     ]
// }))




app.use(routes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
