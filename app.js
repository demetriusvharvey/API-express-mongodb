let express = require('express')
let router = require('./router')

let app = express()

let cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(router)

module.exports = app