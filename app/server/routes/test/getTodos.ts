import {router, publicProcedure} from "../../trpc";
import { eq } from "drizzle-orm";
import { db } from "@/app/db";
import {users} from "@/app/db/schema";
import { z } from "zod";

export const exampleRouter = router({
    sayHello: publicProcedure.query(async () => {
      return { message: "Hello Everybody" };
    }),
    addUser: publicProcedure.input(z.object({
      fullName: z.string(),
      phone : z.string()
    })).mutation(async ({input}) => {
      return db.insert(users).values(input);
    }),
    getUsers: publicProcedure.query(async () => {
      return db.select().from(users);
    })
  });

  // {
  //   full_name: "name",
  //   phone : "0780417287"
  // }