import { z } from "zod";

const envSchema = z.object({
  // Server
  VITE_NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Api
  VITE_API_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.parse(import.meta.env);

export const env = parsedEnv;
