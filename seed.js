require('./connection.js')
let mongoose = require('mongoose')
let data = require('./data.json')
let Player = require('./players')


Player
  .deleteMany({})
  .then(()=> Player.create(data.data))
  .then(()=> console.log(data.data, "Done!"))
  .catch(()=> console.log("Error", error))
  .then(mongoose.disconnect)