const { response } = require('express')
const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors());

const users = ["Asad", "Mayin", "Humayra", "Ashraful"]

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  const fruit = {
    product:"ada",
    price:220
  }
  res.send(fruit)
}) 
app.get('/fruits/banana', (req,res)=>{
  res.send({fruit:'banana', quantity:100,price:220})
})
app.get('/users/:id',(req,res)=>{
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id];
  res.send({id, name})
  console.log(req.params.id)
})

app.post('/addUser', (req, res) => {
  console.log('post req send');
})
app.listen(4200, () => console.log('listening to port 4200'))