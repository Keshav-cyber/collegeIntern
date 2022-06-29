const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name:   
    {
        type:String,
        required:true,
        trim:true
    },

    email: 
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    mobile: 
    {
        type: String,
        required: true,
        unique: true,
    }, 

    collegeId: 
    {
        type:ObjectId,
         ref: "colleges",
         required: true
    },
        
    isDeleted: 
    {
        type:Boolean, 
        default: false
    },
})

module.exports = mongoose.model("intern",internSchema)