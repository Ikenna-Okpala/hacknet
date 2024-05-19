import express, { Request, Response } from "express";
import { addFriends, getFriends } from "../controllers/friends.controlller";

const friendsRouter = express.Router();

friendsRouter.get("/:id", getFriends);
friendsRouter.post("/:id", addFriends);
// friendsRouter.delete("/:id", deleteFriend);

export default friendsRouter;
