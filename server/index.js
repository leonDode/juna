import express from "express";
const app = express();
import mysql from "mysql";

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "07052005",
    database:"juna"

})



app.get('/', (req, res) => {
    db.query("")
})


app.listen(3001, () =>{
    console.log("Rodando na porta 3001");
})