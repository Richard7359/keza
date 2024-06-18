import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";
import {
  addCourse,
  getCourse,
  getCourseById,
  archiveCourse,
  getAllUnArchivedCourse,
} from "./course";
import { addBunner, getAllBunners } from "./bunner";

export const appRouter = router({
  exampleRouter: exampleRouter,
  addCourse: addCourse,
  getCourse: getCourse,
  getCourseById: getCourseById,
  archiveCourse: archiveCourse,
  getAllUnArchivedCourse: getAllUnArchivedCourse,
  addBunner: addBunner,
  getAllBunners: getAllBunners,
});

export type AppRouter = typeof appRouter;
