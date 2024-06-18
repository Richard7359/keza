import { router, publicProcedure } from "../../trpc";
import { z } from "zod";
import client from "@/app/utils/client";

export const addBunner = router({
  addBunner: publicProcedure
    .input(
      z.object({
        description: z.string(),
        pdf: z.string()
      })
    )
    .mutation(async ({ input }) => {
      try {
        const bunner = await client.addBunner(input);
        return bunner;
      } catch (error : any) {
        throw new Error(error);
      }
    }),
});
