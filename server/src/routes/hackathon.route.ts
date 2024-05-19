import express from "express";
import { createHackathon } from "../controllers/hackathon.controller";

const hackathonRouter = express.Router();

hackathonRouter.post("/create", createHackathon);

export default hackathonRouter;
