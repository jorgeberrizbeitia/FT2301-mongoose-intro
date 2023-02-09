
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
  // return StudentModel.find(  ) // trae TODOS los documentos de esta colección

  // return StudentModel.find({candy: {$gte: 20}})
  // return StudentModel.find({$or: [{likesPokemon: true}, {pizzaToppings: {$in: ["jamon"]}}]})

  return StudentModel.find()
  .select({name: 1, candy: 1}) // funciona como el project de mongo compass
  .sort({candy: 1})
  .skip(1) // salta el primer elemento
  .limit(2) // solo devuelve los primeros 2 resultados que consigas

})
.then((response) => {
  console.log(response)
  console.log("respuesta correcta")


  // otros metodos de Find
  // return StudentModel.findOne({likesPokemon: true}) // busca el primer elemento que consigas con la condicion
  return StudentModel.findById("63e506e36af0f21e5179132c") // busca el elemento que concuerde con el id

})
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log("todo mal", error)
})




