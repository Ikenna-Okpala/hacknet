import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../firebase";
import { Request, Response } from "express";
import db from "../db/db.config";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const email = `${username}@gmail.com`;

  try {
    const userFirebase = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = await db
      .insert(users)
      .values({
        username,
        memberSince: new Date(),
      })
      .returning();

    if (!user) {
      throw Error("");
    }

    const accessToken = await userFirebase.user.getIdToken();

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: false,
    });

    res.status(201).json({ ...user[0] });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: "Cannot sign up user",
    });
  }
};

export const logOut = async (req: Request, res: Response) => {
  try {
    await signOut(auth);

    res.clearCookie("access_token").status(201).json({
      message: "Log out successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const email = `${username}@gmail.com`;

  try {
    const userFirebase = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username));

    if (user.length == 0) {
      throw new Error("");
    }

    const accessToken = await userFirebase.user.getIdToken();

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({ ...user[0] });
  } catch (error) {
    console.log(error);

    res.status(401).json({
      error: "Cannot login user",
    });
  }
};
