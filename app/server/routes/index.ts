import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";


export const appRouter = router({
  exampleRouter: exampleRouter
});

export type AppRouter = typeof appRouter;
