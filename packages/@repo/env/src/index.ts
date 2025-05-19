import { z } from "zod";

// Define the schema for environment variables
const envSchema = z.object({
  // Add your environment variables here
  // Example:
  // DATABASE_URL: z.string().url(),
  // API_KEY: z.string(),
});

// Parse and validate the environment variables
const env = envSchema.parse(process.env);

export { env };