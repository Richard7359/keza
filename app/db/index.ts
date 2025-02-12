import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema'

const connectionString = process.env.DATABASE_URL

const client = postgres(process.env.DATABASE_URL as string, { prepare: false })
export const db = drizzle(client);

const allUsers = db.select().from(users);