const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT

app.use(express.static(__dirname + '/dist'))

app.listen(PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  })

// PathLocationStrategy
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/roim-olam-website/index.html'))
})

console.log('Console listening!')