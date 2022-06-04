const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema= new Schema(
    {
        model:{
            type:String,
            required: true,
            unique:true,
            maxlength:100
        },
        status:{
            type:String,
            required: true,
            maxlength:50
        },
        price:{
            type: Number,
            required: true
        }
    }
);

const Car= mongoose.model('car', carSchema);
module.exports = Car;