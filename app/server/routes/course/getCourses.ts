import {router, publicProcedure} from "../../trpc";
import client from "@/app/utils/client";

export const getCourse = router({
    getCourse: publicProcedure.query(async () => {
      try {
       const allCourses =  await client.getAllCourses();
       return allCourses;
      } catch (error : any) {
        console.log(error);
      }
    })
  });
