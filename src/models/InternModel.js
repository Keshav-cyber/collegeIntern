const mongoose = require('mongoose')  // importing the mongoose to create the Intern schema

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    collegeId: {
        type: objectId,
        ref: '',
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
  
}, { timestamps: true })

module.exports = mongoose.model('Intern', internSchema) // mongoose creates the InternModel