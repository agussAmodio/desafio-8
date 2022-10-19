import knex from "knex"
import connection from "./db.js"

const Knex = knex (connection)

Knex.schema.createTableIfNotExists("productos" , table => {
    table.increments('id')
    table.string('tittle')
    table.integer("price")
    table.integer("stock")
    table.string("Descripcion")
    table.string("thumbnail")
})
.then(()=> {
    console.log("Tabla creada con exito!");
})
.catch((e) => console.log("La tabla no se creo correctamente , error: " , e))
.finally(()=> Knex.destroy())
