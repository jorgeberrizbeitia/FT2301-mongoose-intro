const mongoose = require("mongoose")

// crear nuestro Schema
const studentSchema = new mongoose.Schema({
  name: String,
  candy: Number,
  likesPokemon: Boolean
})

// crear nuestro modelo => siempre con PascalCasing
const StudentModel = mongoose.model("Student", studentSchema)
// 1. nombre interno del modelo en mongo
// 2. el schema que hemos creado

module.exports = StudentModel