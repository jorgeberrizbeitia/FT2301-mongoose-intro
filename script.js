
// este archivo lo usamos para haceer modificaciones en la DB


// 1. Establecer una conection con la DB.
const mongoose = require("mongoose");
const StudentModel = require("./models/student.model.js")


// en caso que el url abajo no funcione cambiar `localhost:27017` por `127.0.0.1`
mongoose.connect("mongodb://localhost:27017/patata-db") // retorna una promesa
.then((response) => {
  console.log("conectados a la DB, todo bien")


  // agregar un nuevo documento a la BD
  return StudentModel.create({
    name: "Mario",
    likesPokemon: true
  })


})
.then((response) => {
  console.log("Mario ha sido agregado a la BD")
})
.catch((error) => {
  console.log("todo mal", error)
})




