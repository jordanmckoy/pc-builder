import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const partRouter = createTRPCRouter({
  getParts: publicProcedure.query(async ({ ctx }) => {
    const parts = {
      cpus: await ctx.prisma.cPU.findMany(),
      motherboards: await ctx.prisma.motherboard.findMany(),
      gpus: await ctx.prisma.gPU.findMany(),
      psus: await ctx.prisma.pSU.findMany(),
      cases: await ctx.prisma.case.findMany(),
      coolers: await ctx.prisma.cooler.findMany(),
      ram: await ctx.prisma.rAM.findMany(),
      storage: await ctx.prisma.storage.findMany(),
    };
    return parts;
  }),
  getCPUs: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cPU.findMany();
  }),
});
