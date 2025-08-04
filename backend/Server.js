const express = require("express");
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db.js')
const CoordinatorRoutes = require('./routes/CoordinatorRoutes.js')
const EventRoutes = require('./routes/EventRouter.js')


const app = express();

connectDB();  

app.use(cors())

app.get("/", (req, res) => {
  res.send('<h1>Server Stated</h1>')
});

app.use('/api/coordinators',CoordinatorRoutes);
app.use('/api/events',EventRoutes);




const port = 3000;

app.listen(port,()=>{
    console.log('Server is running in port 3000');
    
})

