// import { publicProcedure } from "@/server/trpc";
// import { z } from "zod";

// const Input = z.object({
//   userId: z.string(),
//   id: z.string(),
// });

// export const deleteAgent = publicProcedure
//   .input(Input)
//   .mutation(async (input) => {
//     try {
//       const agent = await client.deleteBankAgent({
//         userId: input.input.userId,
//         id: input.input.id,
//       });

//       return agent.delete_BankAgent?.returning;
//     } catch (error: any) {
//       throw error.message;
//     }
//   });
