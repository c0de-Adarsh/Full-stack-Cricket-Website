const mongoose = require('mongoose')
const validator = require('validator')

const userSchma = new mongoose.Schema({
  
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
    
        validate: [validator.isEmail, "Please Enter a valid Email"], 
      },
    
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should have more than 4 characters"],
        select: false, 
      },
      avatar: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      role: {
        type: String,
        default: "user",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,

})

const User = mongoose.model("User",userSchma)

module.exports = User;