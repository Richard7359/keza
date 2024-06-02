import { router, publicProcedure } from "../../trpc";
import { eq } from "drizzle-orm";
import { db } from "@/app/db";
import { users, courses } from "@/app/db/schema";
import { z } from "zod";

export const addCourse = router({
  addCourse: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        courseDetails: z.object({
          basicInfo: z.object({
            title: z.string(),
            level: z.string(),
            complexity: z.number(),
            uploadedBy: z.string(),
            attachment: z.string(),
          }),
          steps: z.array(
            z.object({
              title: z.string(),
              step: z.number(),
              template: z.string(),
              attachment: z.any()
            //   attachment: z.array(
            //     z.object({
            //       position: z.string(),
            //       file: z.string(),
            //     })
            //   ),
            })
          ),
        }),
      })
    )
    .mutation(async ({ input }) => {
      console.log(input);
      return db.insert(courses).values(input);
    }),
});
