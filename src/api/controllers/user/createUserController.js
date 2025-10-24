import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { successResponse, errorResponse } from "../../utils/ApiResponse.js";
import Joi from "joi";

// ✅ Joi Validation Schema
const userSchema = Joi.object({
    full_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string().min(7).max(15).required(),
    country_code: Joi.string().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
    position: Joi.string().allow(""),
    company_name: Joi.string().allow(""),
    company_email: Joi.string().email().allow(""),
    company_address: Joi.string().allow(""),
    branch: Joi.string().allow(""),
    home_address: Joi.string().allow(""),
    date_of_birth: Joi.date().optional(),
    gender: Joi.string().valid("Male", "Female", "Other").optional(),
    emergency_contact: Joi.object({
        name: Joi.string().required(),
        relation: Joi.string().required(),
        country_code: Joi.string().required(),
        phone_number: Joi.string().required(),
    }).required(),
    documents: Joi.object({
        aadhar_card: Joi.object({
            number: Joi.string().required(),
            file: Joi.string().uri().required(),
        }).required(),
        pan_card: Joi.object({
            number: Joi.string().required(),
            file: Joi.string().uri().required(),
        }).required(),
        passport: Joi.object({
            number: Joi.string().required(),
            file: Joi.string().uri().required(),
        }).required(),
    }).required(),
    notes: Joi.string().allow(""),
});

export const createUserController = async (req, res) => {
    try {
        // 1️⃣ Validate input
        const { error, value } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                details: error.details.map((d) => d.message),
            });
        }

        // 2️⃣ Check for existing user
        const existingUser = await User.findOne({ email: value.email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "Email already exists" });
        }

        // 3️⃣ Hash password
        const hashedPassword = await bcrypt.hash(value.password, 10);

        // 4️⃣ Create user
        const newUser = new User({
            ...value,
            password: hashedPassword,
        });

        await newUser.save();

        // 5️⃣ Respond success (omit password)
        const { password, ...userData } = newUser.toObject();

        return successResponse(res, "User created successfully 🚀", {
            success: true,
            message: "User created successfully",
            user: userData,
        });
    } catch (err) {
        console.error("Error creating user:", err);
        return errorResponse(res, "Internal server error", 500);
    }
};
