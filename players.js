let mongoose = require('mongoose')


const playerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    position: String,
    team: {
        name: String,
        city: String
    }
})
 let Player = mongoose.model('player', playerSchema)
 
 module.exports = Player