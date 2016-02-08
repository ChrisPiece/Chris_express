var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendfile("./views/index.html")
})

app.use('/',express.static('public'));
app.listen(3000, function() {   //metodo callback
  console.log("started")
}
)
