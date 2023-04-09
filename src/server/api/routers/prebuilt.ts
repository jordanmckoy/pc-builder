import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const preBuildRouter = createTRPCRouter({
  getAllBuilds: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.preBuilt.findMany();
  }),
  getBuild: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const build = await ctx.prisma.preBuilt.findUnique({
        where: {
          id: input.id,
        },
      });

      return build;
    }),
});
