import {router, publicProcedure} from "../../trpc";
// import { eq } from "drizzle-orm";
// import { db } from "@/app/db";
// import {courses} from "@/app/db/schema";
import { z } from "zod";
import client from "@/app/utils/client";

export const getCourseById = router({
    getCourseById: publicProcedure.input(z.object({id: z.string()})).query(async ({input}) => {
      try {
        console.log("input", input);
        const course = await client.getSingleCourses({id: input.id});
        return course;
      } catch (error : any) {
        console.log(error);
      }
    })
  });
