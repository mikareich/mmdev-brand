import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  product: text("product").notNull(),
  details: text("details").notNull(),
});
