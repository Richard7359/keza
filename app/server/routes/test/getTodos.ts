// import {router, publicProcedure} from "../../trpc";

// export const exampleRouter = router({
//     sayHello: publicProcedure.query(async () => {
//       return { message: "Hello Everybody" };
//     }),
//   });

import {router, publicProcedure} from "../../trpc";

export const exampleRouter = router({
    sayHello: publicProcedure.query(async () => {
      return { message: "Hello Everybody" };
    }),
  });
