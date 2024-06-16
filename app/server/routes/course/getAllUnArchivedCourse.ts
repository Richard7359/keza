import {router, publicProcedure} from "../../trpc";
import client from "@/app/utils/client";

export const getAllUnArchivedCourse = router({
    getAllUnArchivedCourse: publicProcedure.query(async () => {
      try {
       const allCourses =  await client.getAllUnArchivedCourse();
       return allCourses;
      } catch (error : any) {
        console.log(error);
      }
    })
  });
