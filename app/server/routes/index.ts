import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";
import { addCourse } from "./course";


export const appRouter = router({
  exampleRouter: exampleRouter,
  addCourse: addCourse,
});

export type AppRouter = typeof appRouter;
