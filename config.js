const AUTH0_CERTIFICATE = process.env.AUTH0_SIGNING_CERTIFICATE_FILENAME || null
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/list-app'
const USE_AUTH = (AUTH0_CERTIFICATE === null) ? false : true

module.exports = {
    AUTH0_DOMAIN: 'dev-qhtirpu7ch1u66es.us.auth0.com',
    AUTH0_CLIENT_ID: 'rJUlXGYCODlgjPKn5qslHgrmuuU9PLRs',
    USE_AUTH: USE_AUTH,
    AUTH0_CERTIFICATE: AUTH0_CERTIFICATE,
    PORT: process.env.PORT || 5000,
    MONGODB_URL: MONGODB_URL
}