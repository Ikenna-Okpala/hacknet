import express from "express";
import { createUser, logOut, loginUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logOut);

export default userRouter;
