const express = require("express");
const connectDB = require('./config/db.js')
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Server Stated</h1>')
});

connectDB();  


const port = 3000;

app.listen(port,()=>{
    console.log('Server is running in port 3000');
    
})

