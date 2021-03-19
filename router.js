let express = require('express')
const controller = require('./controller')
let router = new express.Router()
let playerModel = require('./players')

router.get('/', (request, response) => {
    response.json({
        sentence: 'Here are the players info',
        link: 'http://localhost:3000/players'
    })
})

router.get('/players', controller.read)

module.exports = router