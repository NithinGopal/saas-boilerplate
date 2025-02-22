import type { Config } from 'drizzle-kit';

export default {
  schema: './src/shared/db/schema/index.ts',
  out: './src/shared/db/migrations',
  driver: 'better-sqlite3',
  dbCredentials: {
    url: './dev.db', // This is for generating migrations only
  },
} satisfies Config;
