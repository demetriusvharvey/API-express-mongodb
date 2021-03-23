let express = require('express')
const controller = require('./controller')
let router = new express.Router()
let playerModel = require('./players')



router.get('/', controller.readAll)
router.get('/:id', controller.readById)
router.post('/',controller.create)
router.put('/:id', controller.update)
router.delete('/id', controller.destroy)

module.exports = router