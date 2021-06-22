import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  patchUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);

router.patch("/:id", patchUserById);

export default router;
