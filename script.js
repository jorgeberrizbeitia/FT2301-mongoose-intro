
// este archivo lo usamos para haceer modificaciones en la DB


// 1. Establecer una conection con la DB.
const mongoose = require("mongoose");
const StudentModel = require("./models/student.model.js")

const allStudents = require("./data/students.json")
// los .json son automaticamente exportados. no hace falta module.exports


// en caso que el url abajo no funcione cambiar `localhost:27017` por `127.0.0.1`
mongoose.connect("mongodb://localhost:27017/patata-db") // retorna una promesa
.then((response) => {
  console.log("conectados a la DB, todo bien")


  // CRUD
  // C => CREATE
  // agregar un nuevo documento a la BD
  // return StudentModel.create({
  //   name: "Mario",
  //   likesPokemon: true
  // })

  // agregar multiples studiantes a la vez
  // return StudentModel.insertMany(allStudents)

  // R => READ
  return StudentModel.find() // trae todos los documentos de esta colección


})
.then((response) => {
  console.log(response)
  console.log("respuesta correcta")
})
.catch((error) => {
  console.log("todo mal", error)
})




