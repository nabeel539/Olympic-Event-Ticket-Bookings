import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true }, // Store hashed password
});

const Users = mongoose.models.user || mongoose.model("Users", userSchema);

export default Users;
