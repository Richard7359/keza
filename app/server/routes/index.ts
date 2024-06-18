import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./test/index";
import {
  addCourse,
  getCourse,
  getCourseById,
  archiveCourse,
  getAllUnArchivedCourse,
} from "./course";
import { addBunner, getAllBunners, activateBunner } from "./bunner";

export const appRouter = router({
  exampleRouter: exampleRouter,
  addCourse: addCourse,
  getCourse: getCourse,
  getCourseById: getCourseById,
  archiveCourse: archiveCourse,
  getAllUnArchivedCourse: getAllUnArchivedCourse,
  addBunner: addBunner,
  getAllBunners: getAllBunners,
  activateBunner: activateBunner,
});

export type AppRouter = typeof appRouter;
