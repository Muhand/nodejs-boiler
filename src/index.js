const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

let app = express()
app.server = http.createServer(app)

app.use(bodyparser.urlencoded({extended: true}))

app.use(bodyparser.json({limit: '100kb'}))

app.use('/', (req, res) => {
  let obj = {
    first_name: "Muhand",
    last_name: "Jumah"
  }

  // Send back JSON
  res.status = 200
  res.writeHead(200, {'Content-Type':"application/json"})
  res.end(JSON.stringify(obj))
})

app.server.listen(3000)
