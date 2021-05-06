const { Router } = require('express')
const Humans = require('../models/Humans')
const router = Router()

router.get('/home', async (req, res) => {
  
  const humans = await Humans.find({})
  res.send('<h1>Home</h1>' + humans)
})

router.post('/about', (req, res) => {
  Humans.insertOne({
    name: 'are',
    fam:  'we',
    age:  19
  })
  res.send('<h1>About</h1>')
  
})

module.exports = router