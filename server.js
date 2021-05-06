const express = require('express')
const mongoose = require('mongoose')
const mainRouter = require('./routes/main')

// client подключения
const cors = require('cors')
const proxy = require('express-http-proxy')
//

// create express app
const app = express()

// mongoose connection
mongoose.connect('mongodb+srv://admin:1234qwerty@cluster0.tqb42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

// base connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('base connected')
})

// schema
const kittySchema = new mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting)
}

const Kitten = mongoose.model('Kitten', kittySchema)

const fluffy = new Kitten({
  name: 'Fluffy'
})


const silence = new Kitten({
  name: 'Silence', 
})

// save in table
// silence .save((err, fluffy) => {
//   if (err) return console.error(err)
//   fluffy.speak()
// })
let arr = ''
Kitten.find( (err, kittens) => {
  if (err) return console.error(err)
  arr = kittens
  console.log(kittens)
})


app.use('/api/kit', (req, res) => {
  res.send('<h1>' + arr + '</h1>')
})

// middleware
app.use(mainRouter)


// client передача 
  app.get('/api/export' ,cors(), (req, res) => {  
    res.send(arr)
  })
//

console.log('started')

app.listen(3001)