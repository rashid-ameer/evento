import { z } from "zod";

export const pageSchema = z.number().int().positive().optional();
