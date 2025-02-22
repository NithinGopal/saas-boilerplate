import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from './index';

// Run migrations
async function runMigrations() {
  console.log('Running migrations...');
  migrate(db, { migrationsFolder: './src/shared/db/migrations' });
  console.log('Migrations completed');
}

runMigrations().catch(console.error);