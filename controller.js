let playerModel = require('./players')

let controller = {
    create(request, response) {
        let player = request.body
        playerModel
        .create(player)
        .then(player => response.json({player}))
    },
    read(request, response) {
        playerModel
        .find({})
        .then(player => response.json(player))
    },
}

module.exports = controller