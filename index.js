const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('thank you for calling')
}) 
app.listen(3000, () => console.log('listening to port 3000'))