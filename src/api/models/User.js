import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Basic Identity
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true, unique: true },
    country_code: { type: String },
    photo: { type: String, default: "" },

    // Auth & Access
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" }, // dynamic
    is_active: { type: Boolean, default: true },
    last_login: { type: Date },

    // Company Info
    company_name: { type: String },
    company_email: { type: String },
    position: { type: String },
    branch: { type: String }, // e.g., "Bangalore HQ", "Pune Branch"
    company_address: { type: String },

    // Personal Info
    home_address: { type: String },
    date_of_birth: { type: Date },
    gender: { type: String },

    // Emergency Contact
    emergency_contact: {
      name: { type: String },
      relation: { type: String },
      country_code: { type: String },
      phone_number: { type: String },
    },

    // Documents (file paths or URLs)
    documents: {
      aadhar_card: {
        number: { type: String },
        file: { type: String },
      },
      pan_card: {
        number: { type: String },
        file: { type: String },
      },
      passport: {
        number: { type: String },
        file: { type: String },
      },
    },

    // CRM Specific
    admin_of_branch: { type: String }, // If this user is managing a branch
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // who created this user

    // Metadata
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
