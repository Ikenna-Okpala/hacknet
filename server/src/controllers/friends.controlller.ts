import { Request, Response } from "express";
import db from "../db/db.config";
import { friendslist, users } from "../db/schema";
import { eq, ne } from "drizzle-orm";

export const getFriends = async (req: Request, res: Response) => {
  try {
    const user_id: string = req.params.id;

    const friends = await db
      .select()
      .from(users)
      .innerJoin(friendslist, eq(friendslist.user_id, users.id))
      .where(ne(friendslist.user_id, user_id));

    res.status(200).json(friends);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Bad request" });
  }
};

export const addFriends = async (req: Request, res: Response) => {
  try {
    const user_id: string = req.params.id;

    const friend_id: string = req.body.friend_id;

    await db.insert(friendslist).values([
      {
        user_id: user_id,
        friend_id: friend_id,
      },
      {
        user_id: friend_id,
        friend_id: user_id,
      },
    ]);

    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Something went wrong" });
  }
};
