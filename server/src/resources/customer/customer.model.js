const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema= new Schema(
    {
        fName:{
            type:String,
            required: true,
            unique:true,
            maxlength:100
        },
        lName:{
            type:String,
            required: true,
            maxlength:100
        },
        email:{
            type: String,
            required: true,
            maxlength:100
        },
        mobile:{
            type: Number,
            required: true,
            minlength: 9,
            maxlength: 9
        },
        cars:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Car'
            }
        ]
    }
);

const Customer= mongoose.model('Customer', customerSchema,);
module.exports = Customer;