const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const validate =require("../config/validator")

// create a new user

const createUser = async(req, res)=>{
const { username, email, password} = req.body;
const valid = await validate({username, email,password});

if (valid) {
    const hashedpassword = await bcrypt.hash(valid.password, 10);
    const user = new User({
        username,
        email,
        password:hashedpassword
    });
    await user.save();

    res.status(201).json({
        message: "user created successfully",
        user,
    });

}else {
    res.status(400).json({
        message: "Invalid data",
    });
}

};
module.exports= { createUser }