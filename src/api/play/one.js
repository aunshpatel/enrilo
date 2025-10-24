import connectDB from "../config/db.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
(async function play() {
    try {
        console.log('Function play one');
        await connectDB();
        const password = "MySecurePassword123";
        const hashedPassword = await hashPassword(password);

        const sampleUser = {
            full_name: "Tabrez Shaikh",
            email: "tbz@gmail.com",
            phone_number: "8320336902",
            country_code: "+91",
            password: hashedPassword, // usually hashed in production
            role: "counsellor",
            position: "Senior Education Counsellor",
            company_name: "Global Pathway Consultancy",
            company_email: "info@globalpathway.com",
            company_address: "Vadodara, India",
            branch: "Vadodara HQ",
            home_address: "123 MG Road, Vadodara",
            date_of_birth: new Date("1990-07-15"),
            gender: "Male",
            emergency_contact: {
                name: "Tabrez Shaikh",
                relation: "Brother",
                country_code: "+91",
                phone_number: "8320336901",
            },
            documents: {
                aadhar_card: {
                    number: "1234-5678-9101",
                    file: "https://example.com/uploads/aadhar_priya.pdf",
                },
                pan_card: {
                    number: "ABCDE1234F",
                    file: "https://example.com/uploads/pan_priya.pdf",
                },
                passport: {
                    number: "N1234567",
                    file: "https://example.com/uploads/passport_priya.pdf",
                },
            },
            notes: "Excellent counsellor with strong student follow-up record.",
        };

        console.log(sampleUser);
        const user = new User(sampleUser);
        await user.save();

        console.log("🎉 User saved successfully!");

        process.exit(0);

    } catch (error) {
        console.log('Error at play one');
        console.log(error);
        throw error;
    }
})()

const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
};