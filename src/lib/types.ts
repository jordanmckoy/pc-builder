import { z } from "zod";

export type Part = {
  id: string | null | undefined;
  brand: string | null | undefined;
  model: string | null | undefined;
  price: number | null | undefined;
  image: string | null | undefined;
  stock: number | null | undefined;
};

const ZodPart = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  price: z.number(),
  image: z.string(),
  stock: z.number(),
});

export const CompleteBuild = z.object({
  cpu: ZodPart,
  motherboard: ZodPart,
  ram: ZodPart,
  gpu: ZodPart,
  storage: ZodPart,
  psu: ZodPart,
  case: ZodPart,
  cooling: ZodPart,
  price: z.number(),
});

export type CompleteBuildType = z.infer<typeof CompleteBuild>;
