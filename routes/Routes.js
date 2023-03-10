const {Router} = require('express')
const {getLists, getList, createList, renameList, deleteList, createListEntry, renameListEntry, deleteListEntry} = require('../controllers/ListController')

const router = Router()

router.get('/getLists', getLists)
router.get('/getList', getList)

router.post('/createList', createList)
router.post('/renameList', renameList)
router.post('/deleteList', deleteList)

router.post('/createListEntry', createListEntry)
router.post('/renameListEntry', renameListEntry)
router.post('/deleteListEntry', deleteListEntry)


module.exports = router;
