const mongoose=require('mongoose');

const productScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    }
})

const Product=mongoose.model("product",productScheme);

module.exports=Product;