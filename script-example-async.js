
// este archivo lo usamos para haceer modificaciones en la DB


// 1. Establecer una conection con la DB.
const mongoose = require("mongoose");
const StudentModel = require("./models/student.model.js")


// en caso que el url abajo no funcione cambiar `localhost:27017` por `127.0.0.1`

async function modifyDB () {
  try {
    
    const response = await mongoose.connect("mongodb://localhost:27017/patata-db")
    console.log("conectados a la DB, todo bien")

    const response2 = await StudentModel.create({
      name: "Mario",
      candy: 20,
      likesPokemon: true
    })
    console.log("Mario ha sido agregado a la BD")

  } catch (error) {
    console.log(error)
  }

}
modifyDB()
