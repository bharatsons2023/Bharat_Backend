const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    user_ip_address:{type:String},
   password:{type:String,required:true}
})

const UserModel=mongoose.model("adminuser",UserSchema);

module.exports={
    UserModel
}