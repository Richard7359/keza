import { pgTable, serial, text, varchar, jsonb, uuid, foreignKey, timestamp } from "drizzle-orm/pg-core";
import { sql } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const courses = pgTable('courses', {
  // id: uuid("id").defaultRandom().primaryKey().notNull(),
  id: serial('id').primaryKey(),
  userId: text('userId'),
  courseDetails: jsonb('courseDetails'), 
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => sql`CURRENT_TIMESTAMP`)});
