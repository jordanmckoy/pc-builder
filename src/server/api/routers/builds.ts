import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { CompleteBuild } from "~/lib/types";

export const buildRouter = createTRPCRouter({
  getAllUserBuilds: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.build.findFirst({
        where: {
          userId: input.id,
        },
      });
    }),
  submitBuild: publicProcedure
    .input(
      z.object({
        parts: CompleteBuild,
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await ctx.prisma.build.upsert({
        where: {
          userId: input.id,
        },
        create: {
          cpu_id: input.parts.cpu.id,
          motherboard_id: input.parts.motherboard.id,
          ram_id: input.parts.ram.id,
          gpu_id: input.parts.gpu.id,
          storage_id: input.parts.storage.id,
          psu_id: input.parts.psu.id,
          case_id: input.parts.case.id,
          cooler_id: input.parts.cooling.id,
          price: input.parts.price,
          userId: input.id,
        },
        update: {
          cpu_id: input.parts.cpu.id,
          motherboard_id: input.parts.motherboard.id,
          ram_id: input.parts.ram.id,
          gpu_id: input.parts.gpu.id,
          storage_id: input.parts.storage.id,
          psu_id: input.parts.psu.id,
          case_id: input.parts.case.id,
          cooler_id: input.parts.cooling.id,
          price: input.parts.price,
          userId: "asfdweffsaf",
        },
      });
      return data;
    }),
});
