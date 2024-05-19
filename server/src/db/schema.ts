import { relations } from "drizzle-orm";
import { pgTable, primaryKey, serial, text, timestamp, smallint } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
});

export const hackathons = pgTable("hackathons", {
  id: serial("id").primaryKey(),
  theme: text("theme"),
  startTime: timestamp("start_time"),
  endTime: timestamp("end_time"),
  max_participants: smallint("max_participants"),
  experience_level: text("experience_level"),
  first_place: text("first_place"),
  second_place: text("second_place"),
  third_place: text("third_place"),
});

export const usersRelations = relations(users, ({ many }) => ({
  participant_to_hackathon: many(participant_to_hackathon),
}));

export const hackathonRelations = relations(hackathons, ({many}) => ({
  participant_to_hackathon: many(participant_to_hackathon),
}));

// export const hackathon_participants = pgTable("hackathon_participants", {
//   hackathon_id: serial("hackathon_id").references(hackathons, "id"),
//   user_id: serial("user_id").references(users, "id"),
//   place: smallint("place"),
// });

export const participant_to_hackathon = pgTable("participant_to_hackathon", {
  userId: smallint("userId").notNull().references(() => users.id),
  hackathonId: smallint("hackathonId").notNull().references(() => hackathons.id),
  },
  (t) => ({
    pk: primaryKey({columns: [t.userId, t.hackathonId] }),
  }),
);


export const hackathon_participant_relations = relations(participant_to_hackathon, ({one}) => ({
  user: one(users, {
    fields: [participant_to_hackathon.userId],
    references: [users.id],
  }),
  hackathon: one(hackathons, {
    fields: [participant_to_hackathon.hackathonId],
    references: [hackathons.id],
  }),
}));
