const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the  name."]
    },
    email:{
        type:String,
        required:[true,'Please add the email address.'],
        unique:[true,'Email address is already taken']
    },
    mob:{
       type:String,
       required:[true,'Please add the mobile number.'],
       unique:[true,'Mobile number is already taken']
    },
    password:{
        type:String,
        required:[true,'Please add the user password']
    }
},{timestamps:true});
module.exports=mongoose.model('User',userSchema);