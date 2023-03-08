const {Router} = require('express')
const {expressjwt: jwt} = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const {getLists, getList, createList, renameList, deleteList, createListEntry, renameListEntry, deleteListEntry} = require('../controllers/ListController')
const fs = require('fs')
const jwt_decode = require("jwt-decode");
const { auth } = require('express-oauth2-jwt-bearer');
var cors = require('cors')

const router = Router()

// router.use()

// router.get('/', getList);

// router.post('/save', saveList)
// router.post('/update', updateListItem)
// router.post('/delete', deleteListItem)

router.get('/getLists', getLists)
router.get('/getList', getList)

router.post('/createList', createList)
router.post('/renameList', renameList)
router.post('/deleteList', deleteList)

router.post('/createListEntry', createListEntry)
router.post('/renameListEntry', renameListEntry)
router.post('/deleteListEntry', deleteListEntry)


module.exports = router;
