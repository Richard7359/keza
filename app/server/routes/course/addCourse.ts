import { router, publicProcedure } from "../../trpc";
import { z } from "zod";
import client from "@/app/utils/client";

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
            })
          ),
        }),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const course = await client.addCourse(input);
        return course;
      } catch (error : any) {
        throw new Error(error);
      }
    }),
});
