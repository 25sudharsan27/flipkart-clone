const express=require('express')
const mongoose=require('mongoose')

const cors=require('cors')
const  UserModel=require('./models/user.js')

const app=express();



app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/sample");

app.get("/", (req, res) => {
    console.log('Clients opened a connection');
    UserModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
});
app.get("/ss",(req,res)=>{
    console.log("sudharsan opened a connection");
    UserModel.find({})
    .then(user=>{
        console.log(user[0].imgslider)
        res.json(user[0].imgslider);
    
    }
        )
    .catch(err=>res.json(err))
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
