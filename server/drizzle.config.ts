import { defineConfig } from "drizzle-kit";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "server/src/db/schema.ts",
  out: "server/src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
