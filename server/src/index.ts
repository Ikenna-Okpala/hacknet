import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("Works.....");
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
