
const mongoose=require('mongoose');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const categories=require('./models/categories')


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/flipkart");


app.get('/',(req,res)=>{
    console.log('clients opened a connection');
    categories.find({})
    .then(user=>res.json(user))
    .catch(err=>err=>res.json(err))

})

app.listen(3000,()=>{
    console.log("server is running in http://localhost:3000")
})
