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
        price:{
            type: Number,
            required: true
        }
    }
);

const Car= mongoose.model('Car', carSchema);
module.exports = Car;