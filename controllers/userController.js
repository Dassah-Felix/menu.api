const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const validate =require("../config/validator")
const { generateToken }=require("../utils/generateToken");
// create a new user

const createUser = async(req, res)=>{
const { username, email, password} = req.body;
const valid = await validate({username, email,password});

if (valid) {
    const hashedpassword = await bcrypt.hash(valid.password, 10);
    const user = await User.create({
        username,
        email,
        password:hashedpassword
    });
  
if (user) {
  res.status(201).json({
    username:user.username,
    email:user.email,
    id:user._id,
    token:generateToken(user._id),
});
}


}else {
    res.status(400).json({
        message: "Invalid data",
    });
}

};

//login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const valid = await validate({ email, password });
    if (valid) {
      const user = await User.findOne({ email });
      if (user) {
        const isMatch = await bcrypt.compare(valid.password, user.password);
        if (isMatch) {
          res.status(200).json({
            message: "User logged in successfully",
            user,
          });
        } else {
          res.status(400).json({
            message: "Invalid credentials",
          });
        }
      } else {
        res.status(400).json({
          message: "Invalid credentials",
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid data",
      });
    }
  };
module.exports= {createUser, loginUser }