import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
  });




export const User =  mongoose.models.User ||  mongoose.model("User" , userSchema);


