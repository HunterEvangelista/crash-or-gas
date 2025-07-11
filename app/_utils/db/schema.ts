import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar().primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastname: varchar("last_name").notNull(),
  email: varchar().notNull(),
  phone: varchar(),
});
