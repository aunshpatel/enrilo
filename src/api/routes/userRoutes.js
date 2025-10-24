// @ts-check
import express from "express";
import { userLoginController } from "../controllers/user/userLoginController.js";
import { createUserController } from "../controllers/user/createUserController.js";
import { getUsersController } from "../controllers/user/getUsersController.js";
import { getUserByIdController } from "../controllers/user/getUserByIdController.js";
import { deleteUserByIdController } from "../controllers/user/deleteUserByIdController.js";
import { updateUserController } from "../controllers/user/updateUserController.js";

const router = express.Router();
router.post("/login", userLoginController);
router.post("/", createUserController);
router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.delete("/:id", deleteUserByIdController);
router.put("/:id", updateUserController);

export default router;

