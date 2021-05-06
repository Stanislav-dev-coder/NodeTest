const cors = require('cors')
const proxy = require('express-http-proxy');

const express = require('express')
// const mongoose = require('mongoose')
// const mainRoutes = require('./routes/main') 

// const PORT = 3001

const app = express()




app.get('/home' ,cors(), (req, res) => {
  const arr = [
    { id: 1, name: 'first'},
    { id: 2, name: 'second'},
    { id: 3, name: 'opa'},
    { id: 4, name: 'popa'},
  ]
  res.send(arr)
})


app.listen(3001)
// app.use(mainRoutes)

// const start = async () =>{
//   try {

//     await mongoose.connect('mongodb+srv://admin:1234qwerty@cluster0.dm7sx.mongodb.net/app?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     })

//     app.listen(PORT, () => {
//       console.log('Started')
//     })

//   } catch (e) {
//     console.log(e)
//   }
// }

// start()