import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/app/server/routes";

export const trpc = createTRPCReact<AppRouter>({});
