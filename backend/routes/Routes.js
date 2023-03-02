const {Router} = require('express')
const {getList, saveList, updateListItem, deleteListItem} = require('../controllers/ListController')

const router = Router()

router.get('/', getList)
router.post('/save', saveList)
router.post('/update', updateListItem)
router.post('/delete', deleteListItem)


module.exports = router;