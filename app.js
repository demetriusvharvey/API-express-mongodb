let express = require('express')
let router = require('./router')

let app = express()

app.use(express.json())
app.use('/players',router)

module.exports = app