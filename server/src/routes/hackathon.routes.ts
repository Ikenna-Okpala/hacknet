import express, { Request, Response } from "express";
import { hackathons } from "../db/schema";
import {
  addHackathon,
  getHackathon,
} from "../controllers/hackathons.controller";

const hackathonRouter = express.Router();

hackathonRouter.post("/", addHackathon);
hackathonRouter.get("/", getHackathon);

export default hackathonRouter;
