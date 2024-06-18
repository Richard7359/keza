import {router, publicProcedure} from "../../trpc";
import client from "@/app/utils/client";

export const getAllBunners = router({
    getAllBunners: publicProcedure.query(async () => {
      try {
       const allCourses =  await client.getAllBunners();
       return allCourses;
      } catch (error : any) {
        console.log(error);
      }
    })
  });
