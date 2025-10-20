import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin", "sales", "support"], default: "sales" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
