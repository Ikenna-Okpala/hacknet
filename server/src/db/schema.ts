import { relations } from "drizzle-orm";
import { pgTable, primaryKey, serial, text, timestamp, smallint, boolean, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  number_of_hackathons: integer("number_of_hackathons"),
  member_since: timestamp("member_since"),
  isJudge: boolean("is_judge").default(false),
  jobStatus: text("job_status").default("Student"),
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

export const friendslist = pgTable("friendslist", {
  user_id: serial("user_id").notNull().references(() => users.id),
  friend_id: serial("friend_id").notNull().references(() => users.id),
},
(t) => ({
  pk: primaryKey({columns: [t.user_id, t.friend_id] }),
}),
);

export const friend_request_list = pgTable("friend_requests", {
  sender_id: serial("sender_id").notNull().references(() => users.id),
  receiver_id: serial("receiver_id").notNull().references(() => users.id),
},
(t) => ({
  pk: primaryKey({columns: [t.sender_id, t.receiver_id] }),
}),
);

export const user_profiles = pgTable("user_profiles", {
  id: serial("id").primaryKey(),
  favorite_project: text("favorite_project"),
  bio: text("bio"),
  user_id: serial("user_id").notNull().references(() => users.id),
},
(t) => ({
  pk: primaryKey({columns: [t.user_id] }),
}),
);

export const usersRelations = relations(users, ({ many }) => ({
  participant_to_hackathon: many(participant_to_hackathon),
}));

export const hackathonRelations = relations(hackathons, ({many}) => ({
  participant_to_hackathon: many(participant_to_hackathon),
}));


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
