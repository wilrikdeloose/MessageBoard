var express = require("express")
var cors = require('cors')
var bodyParser = require("body-parser")
var routes = require("./routes/routes.js")
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

routes(app)

var server = app.listen(3000, function () {
    console.log("API running on port " + server.address().port)
})