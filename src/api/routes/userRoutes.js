// @ts-check
import express from "express";
import { userLoginController } from "../controllers/user/userLoginController.js";

const router = express.Router();
router.post("/login", userLoginController);

export default router;

