const mongoose = require("mongoose")

// crear nuestro Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // esta propiedad es obligatoria
    unique: true // este valor es unico, no puede estar repetido en otros documentos
  },
  candy: {
    type: Number,
    default: 1, // si esta propiedad no es agregada, entonces agregala con valor 1.
    // enum: [1, 5, 10, 15]
  },
  likesPokemon: Boolean,
  pizzaToppings: [
    {
      type: String,
      enum: ["piña", "jamon", "peperoni", "tomate", "aceitunas"]
      // enum define los posibles valores que puede tener esta propiedad
    }
  ]
})

// crear nuestro modelo => siempre con PascalCasing
const StudentModel = mongoose.model("Student", studentSchema)
// 1. nombre interno del modelo en mongo
// 2. el schema que hemos creado

module.exports = StudentModel