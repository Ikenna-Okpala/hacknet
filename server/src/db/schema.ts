import { date, timestamp, varchar } from "drizzle-orm/pg-core";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  username: varchar("username", { length: 30 }).primaryKey(),
  memberSince: timestamp("memberSince", { mode: "date" }),
  badges: varchar("badges", { length: 1000 }),
  pastHackathons: varchar("past_hackathons"),
  favoriteProject: text("favorite_project"),
  status: text("status", {
    enum: ["student", "developer", "looking for work"],
  }),

  interests: text("interests"),
  mediaLinks: text("media_links"),
});
