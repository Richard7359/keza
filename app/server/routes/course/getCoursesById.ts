import {router, publicProcedure} from "../../trpc";
import { eq } from "drizzle-orm";
import { db } from "@/app/db";
import {courses} from "@/app/db/schema";
import { z } from "zod";

export const getCourseById = router({
    getCourseById: publicProcedure.input(z.object({id: z.string()})).query(async ({input}) => {
      return db.select().from(courses).where(eq(courses.id, 1));
    })
  });
