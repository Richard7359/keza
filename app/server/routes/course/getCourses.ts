import {router, publicProcedure} from "../../trpc";
import { eq } from "drizzle-orm";
import { db } from "@/app/db";
import {courses} from "@/app/db/schema";

export const getCourse = router({
    getCourse: publicProcedure.query(async () => {
      return db.select().from(courses);
    })
  });
