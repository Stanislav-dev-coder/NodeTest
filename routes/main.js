const { Router } = require('express')
const router = Router()

router.get('/api/test', (req, res) => {
  res.send('<h1>Test res<h1>')
})

module.exports = router