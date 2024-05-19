import { relations } from "drizzle-orm";
import {
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  smallint,
  boolean,
  integer,
  bigserial,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).notNull().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  number_of_hackathons: integer("number_of_hackathons").default(0), //to be initialized to 0
  member_since: timestamp("member_since", { mode: "date" }).notNull(),
  isJudge: boolean("is_judge").default(false),
  profilePicture: text("profile_picture").default("Profile grey.png"),
});

export const hackathons = pgTable("hackathons", {
  id: serial("id").notNull().primaryKey(),
  theme: text("theme"),
  name: varchar("name", { length: 36 }).notNull(),
  startTime: timestamp("start_time"),
  endTime: timestamp("end_time"),
  max_participants: smallint("max_participants"),
  experience_level: text("experience_level", {
    enum: ["beginner", "intermediate", "advanced"],
  }),
  first_place: text("first_place"),
  second_place: text("second_place"),
  third_place: text("third_place"),
});

export const friendslist = pgTable(
  "friendslist",
  {
    user_id: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id),
    friend_id: varchar("friend_id", { length: 36 })
      .notNull()
      .references(() => users.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.user_id, t.friend_id] }),
  })
);

// export const friend_request_list = pgTable(
//   "friend_requests",
//   {
//     sender_id: varchar("sender_id", { length: 36 }).references(() => users.id),
//     receiver_id: varchar("receiver_id", { length: 36 }).references(
//       () => users.id
//     ),
//   },
//   (t) => ({
//     pk: primaryKey({ columns: [t.sender_id, t.receiver_id] }),
//   })
// );

// export const profile_relations = relations(users, ({ one }) => ({
//   user_profiles: one(user_profiles),
// }));
// export const user_profiles = pgTable("user_profiles", {
//   id: serial("id").notNull().primaryKey(),
//   favorite_project: text("favorite_project"),
//   bio: text("bio"),
//   user_id: varchar("user_id", { length: 36 })
//     .notNull()
//     .references(() => users.id),
// });

// export const badges = pgTable("badges", {
//   id: serial("id").notNull().primaryKey(),
//   name: text("name").notNull(),
//   description: text("description").notNull(),
//   icon: text("icon"),
// });

// export const user_badges = pgTable(
//   "user_badges",
//   {
//     user_id: varchar("user_id", { length: 36 })
//       .notNull()
//       .references(() => users.id),
//     badge_id: serial("badge_id")
//       .notNull()
//       .references(() => badges.id),
//   },
//   (t) => ({
//     pk: primaryKey({ columns: [t.user_id, t.badge_id] }),
//   })
// );

// export const usersRelations = relations(users, ({ many }) => ({
//   participant_to_hackathon: many(participant_to_hackathon),
// }));

// export const hackathonRelations = relations(hackathons, ({ many }) => ({
//   participant_to_hackathon: many(participant_to_hackathon),
// }));

// export const participant_to_hackathon = pgTable(
//   "participant_to_hackathon",
//   {
//     userId: varchar("user_id", { length: 36 })
//       .notNull()
//       .references(() => users.id),
//     hackathonId: smallint("hackathonId")
//       .notNull()
//       .references(() => hackathons.id),
//   },
//   (t) => ({
//     pk: primaryKey({ columns: [t.userId, t.hackathonId] }),
//   })
// );

// export const hackathon_participant_relations = relations(
//   participant_to_hackathon,
//   ({ one }) => ({
//     user: one(users, {
//       fields: [participant_to_hackathon.userId],
//       references: [users.id],
//     }),
//     hackathon: one(hackathons, {
//       fields: [participant_to_hackathon.hackathonId],
//       references: [hackathons.id],
//     }),
//   })
// );
