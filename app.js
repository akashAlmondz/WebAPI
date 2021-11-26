require('dotenv').config();
const express=require('express');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const formController=require('./routes/form-route');
var path = require('path');

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api/v1',formController)
module.exports=app; 

