import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const { DB_URL, DB_TOKEN } = process.env;

if (!DB_URL || !DB_TOKEN) {
  throw new Error("Database credentials not set!");
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: DB_URL,
    authToken: DB_TOKEN,
  },
});
