
const mongoose = require('mongoose');


const signupSchema = new mongoose.Schema({
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required: true,
    },
    password:{
        type:String,
        required:true
    },
  });
  
  
  module.exports = mongoose.model('Signup', signupSchema);
  