import { pgTable, serial, text, varchar, jsonb, foreignKey, timestamp } from "drizzle-orm/pg-core";
import { sql } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  userId: text('userID'), // Adjusted to match expected arguments
  courseDetails: jsonb('course_details'), // JSONB column to store course details
  createdAt: timestamp('created_at').defaultNow(), // Set default current timestamp
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => sql`CURRENT_TIMESTAMP`)});
