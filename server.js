import dotenv from 'dotenv';
import express from "express";
import path from "path";
import mongoose from 'mongoose';

dotenv.config();
const app = express();
// const httpServer = createServer(app); // Create HTTP server
// initSocket(httpServer); // Initialize Socket.IO

// // Middleware
// app.use(cors());
// app.use(logger("dev"));
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MongoDB).then(() => {
//   console.log("✅ Connected to MongoDB");
// }).catch((err) => {
//   console.error("❌ MongoDB connection error:", err);
// });