import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";
import { addCourse, getCourse,getCourseById, archiveCourse} from "./course";


export const appRouter = router({
  exampleRouter: exampleRouter,
  addCourse: addCourse,
  getCourse: getCourse,
  getCourseById: getCourseById,
  archiveCourse: archiveCourse,
});

export type AppRouter = typeof appRouter;
