// import {router, publicProcedure} from "../../trpc";

// export const exampleRouter = router({
//     sayHello: publicProcedure.query(async () => {
//       return { message: "Hello Everybody" };
//     }),
//   });

import {router, publicProcedure} from "../../trpc";
import { eq } from "drizzle-orm";
import { db } from "@/app/db";
import {users} from "@/app/db/schema";

export const exampleRouter = router({
    sayHello: publicProcedure.query(async () => {
      return { message: "Hello Everybody" };
    }),
    getUsers: publicProcedure.query(async () => {
      return db.select().from(users);
    })
  });
