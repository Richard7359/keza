import { router, publicProcedure } from "../../trpc";
import { z } from "zod";
import client from "@/app/utils/client";

export const activateBunner = router({
  activateBunner: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.boolean()
      })
    )
    .mutation(async ({ input }) => {
      try {
        const bunner = await client.activateBunner(input);
        return bunner;
      } catch (error : any) {
        throw new Error(error);
      }
    }),
});
