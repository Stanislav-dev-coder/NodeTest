const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  fam:  { type: String },
  age:  { type: Number }
})

module.exports = model('File', schema)