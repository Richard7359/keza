import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";
import { addCourse, getCourse } from "./course";


export const appRouter = router({
  exampleRouter: exampleRouter,
  addCourse: addCourse,
  getCourse: getCourse
});

export type AppRouter = typeof appRouter;
