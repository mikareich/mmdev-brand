import { drizzle } from "drizzle-orm/libsql";

const { DB_URL, DB_TOKEN } = process.env;

if (!DB_URL || !DB_TOKEN) {
  throw new Error("Database credentials not set!");
}

export const db = drizzle({
  connection: {
    url: DB_URL,
    authToken: DB_TOKEN,
  },
});
