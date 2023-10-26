const express = require('express')
const router = express.Router()

// Controllers
const log = require('../controllers/logController')

// City routes
router.get('/console/err', log.logErrors)
router.get('/console/access', log.logAccess)

// Welcome router
router.get('/', (request, response) => {
    response.render('console')
})
 
module.exports = router