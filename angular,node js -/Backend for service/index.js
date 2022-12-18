const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv');

const port=5000;



dotenv.config({path:'./config/config.env'});
require('./connection/connect.js');
//Creating an app from express
const app = express();
const route = require('./routes/userRoute.js');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//Using express.json to get request of json data
app.use(cookieParser());
app.use(express.json());

//Using routes
app.use('/service', route);

//listening to the server
app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})
