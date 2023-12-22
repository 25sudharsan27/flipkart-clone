const mongoose=require('mongoose');



const categories1=new mongoose.Schema({
    name:String,
    image:String
})

const categories=mongoose.model("user",categories1);

module.exports=categories;


