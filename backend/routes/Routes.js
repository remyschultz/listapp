const {Router} = require('express')
const {expressjwt: jwt} = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const {getList, saveList, updateListItem, deleteListItem} = require('../controllers/ListController')
const fs = require('fs')
const jwt_decode = require("jwt-decode");
const { auth } = require('express-oauth2-jwt-bearer');
var cors = require('cors')

const router = Router()

router.get('/', getList);

router.post('/save', saveList)
router.post('/update', updateListItem)
router.post('/delete', deleteListItem)


module.exports = router;