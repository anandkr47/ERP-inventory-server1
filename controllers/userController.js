const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/usermodel");
const jwt=require('jsonwebtoken')
const smsController = require('./smscontroller');

exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password,mob } = req.body;
  // console.log(req.body,"hello2")
  console.log(req.body);
  
  if (!name || !email || !password ||!mob) {
    console.log("under if condition")
    res.status(400);
    throw new Error("All feilds are required!");
  }
  const availableUser = await User.findOne({ email });
   console.log(availableUser);
  if (availableUser) {

    res.status(400);
    throw new Error("User already registered ");
  }

  const HashdPassword = await bcrypt.hash(password, 10);
  console.log(HashdPassword)
  const user = await User.create({name, email, password: HashdPassword,mob });
  if (user) {

    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } else {

    res.status(400);
    throw new Error("User data is not Valid");
  }
  res.json({ message: "Register the user." });
});


exports.loginUser = asyncHandler(async (req, res) => {
    const {email,password}=req.body;
    if(!email||!password)
    {
        res.status(400);
        throw new Error("All feilds are mandatory!");
    }
    const user=await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
      const accessToken=jwt.sign({
        user:{
            name:user.name,
            email:user.email,
            _id:user._id
        }
      },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1m"})
      res.status(200).json({accessToken,name:user.name,email,mobile:user.mob});
    }
    else{
        res.status(401);
        throw new Error("Email or Password are not valid!")
    }
    res.json({message:"login user"})
    
});


exports.wLoginUser = asyncHandler(async (req, res) => {
 const { mob } = req.body;
 
  console.log(req.body);

  if (!mob) {
    console.log(mob, "mobile");
    res.status(400);
    throw new Error("WhatsApp field is mandatory!");
  }

  const existUser = await User.findOne({ mob });
  if (existUser) {
    const otp = Math.floor(Math.random() * 1000000);
    smsController.sendOTP(mob, otp); // Sending OTP via SMS

    res.status(200).json({ otp });
  } else {
    res.status(401);
    throw new Error("WhatsApp number is not existed!");
  }

  res.json({ message: "login user" });
});


exports.currentInfo = asyncHandler(async (req, res) => {
  res.json("success");
});
