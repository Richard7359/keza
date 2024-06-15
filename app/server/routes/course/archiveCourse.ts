import { router, publicProcedure } from "../../trpc";
import { z } from "zod";
import client from "@/app/utils/client";

export const archiveCourse = router({
  archiveCourse: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.boolean()
      })
    )
    .mutation(async ({ input }) => {
      try {
        const course = await client.archiveCourse(input);
        return course;
      } catch (error : any) {
        throw new Error(error);
      }
    }),
});
