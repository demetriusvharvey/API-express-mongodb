let playerModel = require('./players')

let controller = {
    create(request, response) {
        let player = request.body
        playerModel
        .create(player)
        .then(player => response.json({player}))
    },
    readAll(request, response) {
        playerModel
        .find({})
        .then(players => response.json(players))
    },
    update(request, response) {
        let playerz = request.body
        let id = request.params.id
        playerModel
        .findByIdAndUpdate(id, playerz, {new:true})
        .then(player=> response.json(player))
    },
    destroy(request, response){
        let id = request.params.id
        playerModel
        .findByIdAndDelete(id)
        .then(()=> response.json({ok: true}))
    },
    readById(request, response){
        let id = request.params.id
        playerModel
        .findById(id)
        .then(players=> response.json(players))
    }
}

module.exports = controller