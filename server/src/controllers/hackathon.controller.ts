
  import { Request, Response } from "express";
  import db from "../db/db.config";
  import { hackathons } from "../db/schema";

  export const createHackathon = async (req: Request, res: Response) => {
    const {
      theme,
      startTime,
      endTime,
      max_participants,
      experience_level,
    } = req.body;
  
    console.log("nothing")
    try {
      const hackathon = await db
        .insert(hackathons)
        .values({
          theme,
          startTime,
          endTime,
          max_participants,
          experience_level,
        })
        .returning();
  
      if (!hackathon) {
        throw Error("");
      }
  
      res.status(201).json({ ...hackathon[0] });
    }
    catch (error) {
      console.log(error);
      res.status(401).json({
        error: "Cannot create hackathon",
      });
    }
  };
