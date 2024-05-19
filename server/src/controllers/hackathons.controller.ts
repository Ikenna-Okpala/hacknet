import { Request, Response } from "express";
import db from "../db/db.config";
import { hackathons } from "../db/schema";
import { eq } from "drizzle-orm";

export const addHackathon = async (req: Request, res: Response) => {
  const { name, level } = req.body;

  try {
    await db.insert(hackathons).values({
      name,
      experience_level: level,
    });

    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "Bad request",
    });
  }
};

export const getHackathon = async (req: Request, res: Response) => {
  const { level } = req.body;

  try {
    const hackathonResult = await db
      .select()
      .from(hackathons)
      .where(eq(hackathons.experience_level, level));

    res.status(200).json(hackathonResult);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Bad request",
    });
  }
};
