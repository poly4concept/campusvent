import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  givenName: { type: String, required:  true },
  familyName: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);