let mongoose = require('mongoose')
let mongooseConnectionConfig = {
    useNewUrlParser: true,
    useUnififedTopology: true
}
let connectionString = ""
if (process.env.NODE_ENV === "production") {
    connectionString = process.env.DB_URL
}
else {
    connectionString = "mongodb://localhost/players"
}
mongoose.connect(connectionString, mongooseConnectionConfig)
mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))

module.exports = mongoose