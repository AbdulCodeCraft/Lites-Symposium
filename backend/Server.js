const express = require("express");
require('dotenv').config();
const connectDB = require('./config/db.js')
const CoordinatorRoutes = require('./routes/CoordinatorRoutes.js')


const app = express();

connectDB();  

app.get("/", (req, res) => {
  res.send('<h1>Server Stated</h1>')
});

app.use('/api/coordinators',CoordinatorRoutes);




const port = 3000;

app.listen(port,()=>{
    console.log('Server is running in port 3000');
    
})

