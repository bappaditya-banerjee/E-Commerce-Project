import mongoose from "mongoose";

/* User Schema to be used in the mongodb database */

const userSchema = new mongoose.Schema({
  _id: {type:String , required:true},
  name:{ type:String, required:true},
  email:{ type:String, required:true, unique:true},
  imageUrl:{ type:String, required:true},
  cartItems: {type: Object, default:{}},
},{minimize:false})

/*for multiple users */
const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User