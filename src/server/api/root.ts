import { createTRPCRouter } from "~/server/api/trpc";
import { partRouter } from "~/server/api/routers/parts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  parts: partRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
