import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import cors from "cors";

import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route";
import friendsRouter from "./routes/friends.route";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

const port = process.env.PORT || 8000;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("Works.....");
});

app.use("/api/users", userRouter);
app.use("/api/friends", friendsRouter);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
