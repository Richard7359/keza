import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";
import { addCourse, getCourse,getCourseById } from "./course";


export const appRouter = router({
  exampleRouter: exampleRouter,
  addCourse: addCourse,
  getCourse: getCourse,
  getCourseById: getCourseById
});

export type AppRouter = typeof appRouter;
