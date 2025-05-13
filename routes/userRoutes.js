import express from "express";
import { createUser, getUsers, getuserById, updateUser, deleteUser } from '../controller/userController.js';

//create a object of router
const router = express.Router();

//creation of all apis
router.post("/",createUser);
router.get("/",getUsers);
router.get("/:id",getuserById);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;
