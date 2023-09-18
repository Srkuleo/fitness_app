import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }),
  email: varchar("email", { length: 50 }),
  password: varchar("password", { length: 20 }),
});
