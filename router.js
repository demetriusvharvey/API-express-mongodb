let express = require('express')
const controller = require('./controller')
let router = new express.Router()
let playerModel = require('./players')

// //router.get('/', (request, response) => {
//     response.json({
//         sentence: 'Here are the players info',
//         locallink: 'http://localhost:3000/players',
//         deployedlink: 'https://api-project-ga.herokuapp.com/players'
//     })
// })

router.get('/players', controller.readAll)
router.get('/:id', controller.readById)
router.post('/',controller.create)
router.put('/:id', controller.update)
router.delete('/id', controller.destroy)

module.exports = router