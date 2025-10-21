import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// 🔹 Parse JSON bodies
app.use(express.json());

// 🔹 Optional: Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// All routes
app.use("/api", routes);

// Health check base route
app.get("/", (req, res) => {
  res.send("Welcome to CRM API 🚀");
});

// Error Handler
app.use(errorHandler);

export default app;
