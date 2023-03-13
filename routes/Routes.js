const {Router} = require('express')
const {saveList, getLists, getList, createList, renameList, deleteList, createListEntry, renameListEntry, deleteListEntry} = require('../controllers/ListController')

const router = Router()

// const isAuthenticated = (req, res, next) => {
//     const authorizationHeader = req.headers['authorization'];
//     const authorizationToken = authorizationHeader.split(' ')[1];
//     if (authorizationToken) {
//         jwt.verify(authorizationToken, config.jwtSecret, (err, decoded) => {
//             if (err) {
//                 res.status(401).json({ error: 'Failed to authenticate' });
//             } else {
//                 req.authorId = decoded.id;
//                 next();
//             }
//         });
//     } else {
//         res.status(403).json({ error: 'No token provided' })
//     }
// }

router.post('/saveList', saveList)

router.get('/getLists', getLists)
router.get('/getList', getList)

router.post('/createList', createList)
router.post('/renameList', renameList)
router.post('/deleteList', deleteList)

router.post('/createListEntry', createListEntry)
router.post('/renameListEntry', renameListEntry)
router.post('/deleteListEntry', deleteListEntry)


module.exports = router;
