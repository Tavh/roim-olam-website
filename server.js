const express = require('express')
const app = express()
const path = require('path')
const defaultPort = 8080

app.use(express.static(_dirname + '/dist'))
app.listen(process.env.PORT || defaultPort)

// PathLocationStrategy
app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname + '/dist/index.html'))
})

console.log('Console listening!')