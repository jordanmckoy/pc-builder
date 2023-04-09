import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buildRouter = createTRPCRouter({
  getAllBuilds: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.build.findMany();
  }),
});
