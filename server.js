import express from "express";
const app = express()
import connection from "./db.js"
import DB_Container from "./contenedor.js";
const DB = new DB_Container(connection , "productos");

app.get("/productos" , async (req,res)=>{
    const productos = await DB.getAll()
    res.send(productos)
})

app.get("/productos/:id", async (req, res) => {
    const { id } = req.params;
    const productos = await DB.getbyId(id);
    res.send(productos);
  });
  
  app.post("/productos", async (req, res) => {
    const { body } = req;
    await DB.InsertValue(body);
    res.send(body);
  });
  
  app.put("/productos/:id", async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const result = await DB.updateEntry(body, id);
    res.send({ result });
  });
  
  app.delete("/productos/:id", async (req, res) => {
    const { id } = req.params;
    const result = await DB.deleteEntry(id);
    res.send({ result });
  });


app.listen(8081 , (req , res) => {
    console.log("Escuchando!");
})

