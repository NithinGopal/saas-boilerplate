import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Add other environment variables here as needed
  // Example:
  // API_URL: z.string().url(),
  // DATABASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);