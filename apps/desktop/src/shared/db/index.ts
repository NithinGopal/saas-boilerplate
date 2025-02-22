import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { app } from 'electron';
import path from 'path';
import fs from 'fs';

// Ensure the data directory exists
const dataDir = app.getPath('userData');
const dbDir = path.join(dataDir, 'databases');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'app.db');
const sqlite = new Database(dbPath);

// Export the database instance
export const db = drizzle(sqlite, { schema });

// Optional: Initialize the database with default data if needed
export function initializeDatabase() {
  // Add any initialization logic here
  console.log('Database initialized at:', dbPath);
}
