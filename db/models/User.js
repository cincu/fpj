import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  admin: { type: Boolean, default: false },
});

const User = models.User || model("User", userSchema);
export default User;
