import express from "express";
import UserRouter from "./router/UserRouter.js";

import dotenv from "dotenv"

import pkg from 'pg';
const { Pool } = pkg;
const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()


app.use(express.json())

app.use(UserRouter)




const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'imart',
    password: 'postgres',
    port: 5432, // Default PostgreSQL port
});
  
// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err);
    } else {
      console.log('Connected to PostgreSQL');
    }
});


app.get("/",(req,res)=>{
    res.send("ini memang benar adanya")
})

app.get('/students', (req, res) => {
    pool.query('SELECT * FROM student', (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(result.rows);
      }
    });
});

import User from "./models/Employee.js";

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})









