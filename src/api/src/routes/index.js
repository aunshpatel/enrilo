import express from "express";
import healthRoutes from "./healthRoutes.js";

const router = express.Router();

router.use("/health", healthRoutes);

// You can later add more modules like:
// router.use("/users", userRoutes);
// router.use("/deals", dealRoutes);

export default router;
