import mongoose from "mongoose";
//schema creation
const userSchema = new mongoose.Schema({
    //for name
    name:{
        type:String,
        required:true,
    },
    //for email
    email:{
        type:String,
        required:true,
        unique:true,
    },
    //for city
    city:{
        type:String,
        required:true,
    },

    
},
    //specify collection name to store data
  {
    collection: "profile",  
  });

const User = mongoose.model("User",userSchema)

export default User;