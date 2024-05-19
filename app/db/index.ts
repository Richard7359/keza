// import * as schema from "./schema";
// import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";

// declare global {
//   var db: PostgresJsDatabase<typeof schema> | undefined;
// }

// let db: PostgresJsDatabase<typeof schema>;

// if (process.env.NODE_ENV === "production") {
//   db = drizzle(postgres(process.env.DATABASE_URL!), { schema });
// } else {
//   if (!global.db) {
//     global.db = drizzle(postgres(process.env.DATABASE_URL!), { schema });
//   }
//   db = global.db;
// }

// export { db };

// postgress

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema'

const connectionString = process.env.DATABASE_URL

const client = postgres(process.env.DATABASE_URL as string, { prepare: false })
const db = drizzle(client);

const allUsers = db.select().from(users);


// import 'dotenv/config'

// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'

// const connectionString = process.env.DATABASE_URL

// // Disable prefetch as it is not supported for "Transaction" pool mode
// export const client = postgres(connectionString as string, { prepare: false })
// export const db = drizzle(client);